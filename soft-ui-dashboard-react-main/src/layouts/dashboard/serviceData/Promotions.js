import React from "react";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

function Promotions() {
    const promotions = [
      "50% off on selected services",
      "Buy 1 Get 1 Free",
      "Free service trial for new users",
    ];
  
    return (
      <SoftBox>
        <Card>
          <CardHeader
            title={
              <Typography variant="h5" fontWeight="medium">
                Current Promotions
              </Typography>
            }
            style={{ textAlign: 'center' }}
          />
          <CardContent>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {promotions.map((promotion, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Typography variant="body1">{promotion}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </SoftBox>
    );
  }
  
  export default Promotions;