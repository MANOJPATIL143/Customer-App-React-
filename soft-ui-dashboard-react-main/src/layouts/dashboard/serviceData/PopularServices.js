import React from "react";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
// import SoftBox from "../../../components/SoftBox";
// import SoftTypography from "../../../components/SoftTypography";
import { Card, CardContent, CardHeader, List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
    backgroundColor: theme.palette.primary.lite, // Change the color to primary dark
    color: theme.palette.primary.contrastText, // Set text color for better contrast
    textAlign: "center",
    padding: theme.spacing(2),
  }));
const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.25rem',
}));

const ListItemTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'medium',
  color: theme.palette.text.primary,
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: '8px 0',
}));

function PopularServices() {
  const services = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5"
  ];

  return (
    <SoftBox>
       <Card sx={{ width: 600, height: 350 }}>
        <CardHeaderStyled
          title={<CardTitle>Popular Services</CardTitle>}
        />
        <CardContent>
          <List>
            {services.map((service, index) => (
              <React.Fragment key={service}>
                <ListItem>
                  <ListItemText primary={<ListItemTextStyled>{service}</ListItemTextStyled>} />
                </ListItem>
                {index < services.length - 1 && <DividerStyled />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </SoftBox>
  );
}

export default PopularServices;
