import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentForm from './PaymentForm';
import { Box, Typography, Button, CircularProgress } from '@mui/material';

const BookingConfirmationPage = ({ bookingId }) => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        setBookingDetails(response.data);
      } catch (error) {
        setError('Failed to fetch booking details');
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  const handlePaymentSuccess = () => {
    // Handle successful payment (e.g., show confirmation message, redirect, etc.)
    console.log('Payment was successful');
  };

  const handlePaymentError = (error) => {
    // Handle payment error
    console.error('Payment failed', error);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      <Typography variant="h4">Booking Confirmation</Typography>
      {bookingDetails && (
        <>
          <Typography variant="h6">Booking ID: {bookingDetails.id}</Typography>
          <Typography variant="body1">Amount: {bookingDetails.amount / 100} USD</Typography>
          <PaymentForm
            bookingDetails={bookingDetails}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
        </>
      )}
    </Box>
  );
};

export default BookingConfirmationPage;
