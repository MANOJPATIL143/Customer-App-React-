import React from "react";
import { Button, Typography, Box } from "@mui/material";

function PayPalPayment() {
  const handlePayPalPayment = () => {
    // PayPal payment logic
  };

  return (
    <Box>
      <Typography variant="h6">PayPal Payment Integration</Typography>
      <Typography variant="body2" mb={2}>
        Secure payment through PayPal. Click below to proceed with your payment.
      </Typography>
      <Button variant="contained" color="secondary" onClick={handlePayPalPayment}>
        Pay with PayPal
      </Button>
    </Box>
  );
}

export default PayPalPayment;
