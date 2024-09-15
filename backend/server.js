require('dotenv').config(); 
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Replace with your Stripe secret key
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Use your preferred currency
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));