// PaymentForm.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

function PaymentForm({ bookingId, onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentIntentClientSecret, setPaymentIntentClientSecret] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post('/api/create-payment-intent', { amount: 1000 }); // Replace amount with booking amount
        setPaymentIntentClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Failed to fetch client secret:', error);
      }
    };

    fetchClientSecret();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !paymentIntentClientSecret) {
      return;
    }

    setPaymentLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      paymentIntentClientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    setPaymentLoading(false);

    if (error) {
      setCardError(error.message);
      onError(error);
    } else if (paymentIntent.status === 'succeeded') {
      onSuccess();
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Payment Details</Typography>
        <form onSubmit={handleSubmit}>
          <CardElement />
          {cardError && <Typography color="error">{cardError}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={paymentLoading}
          >
            Pay
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

PaymentForm.propTypes = {
  bookingId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default PaymentForm;
