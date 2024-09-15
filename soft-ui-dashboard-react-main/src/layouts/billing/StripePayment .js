import React from "react";
import { Button, Typography, Box } from "@mui/material";

function StripePayment() {
  const handleStripePayment = () => {
    console.log("Stripe payment processing...");
  };

  return (
    <Box>
      <Typography variant="h6">Stripe Payment Integration</Typography>
      <Typography variant="body2" mb={2}>
        Secure payment through Stripe. Click below to proceed with your payment.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleStripePayment}>
        Pay with Stripe
      </Button>
    </Box>
  );
}

export default StripePayment;
