import React from "react";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highcharts3d from "highcharts/highcharts-3d";

// Enable the 3D module
Highcharts3d(Highcharts);

const CardHeaderStyled = styled(CardHeader)(({ theme }) => ({
    backgroundColor: theme.palette.primary.lite, // Change the color to primary dark
    color: theme.palette.primary.contrastText, 
  textAlign: "center",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.25rem",
}));

// Highcharts options for 3D chart
const options = {
  chart: {
    type: "column",
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 25,
      depth: 70,
    },
    height: 400,
    width: 450, // Set a specific width for the chart
  },
  title: {
    text: "Trending Locations",
  },
  xAxis: {
    categories: ["New York", "Los Angeles", "San Francisco", "Chicago", "Miami"],
  },
  yAxis: {
    title: {
      text: "Number of Locations",
    },
  },
  plotOptions: {
    column: {
      depth: 25,
    },
  },
  series: [
    {
      name: "Locations",
      data: [12, 19, 3, 5, 2],
    },
  ],
};

function TrendingLocations() {
  return (
    <SoftBox sx={{ width: "100%" }}>
      <Card sx={{ width: "100%", height:"350px" }}>
        {/* <CardHeaderStyled title={<CardTitle>Trending Locations</CardTitle>} /> */}
        <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          {/* Chart on the left */}
          <Box sx={{ flexBasis: '50%' }}> 
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              containerProps={{ style: { height: "400px", width: "100%" } }} 
            />
          </Box>
          {/* Empty space or other content on the right */}
          <Box sx={{ flexBasis: '50%', paddingLeft: '16px' }}>
            <Typography variant="body1">
              {/* Additional content or description can go here. This space is available
              for text or other elements next to the chart. */}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </SoftBox>
  );
}

export default TrendingLocations;