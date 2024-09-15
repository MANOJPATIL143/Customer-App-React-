import React from "react";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
import Calendar from "react-calendar"; // Add a calendar component for availability
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import 'react-calendar/dist/Calendar.css';
import './customCalendar.css';

function ServiceDetails({ description, price, availability, reviews, calendarEvents }) {

    // Custom tileContent function to highlight dates
    const highlightDates = ({ date, view }) => {
      // Highlight only in month view
      if (view === "month") {
        const isHighlighted = calendarEvents?.some(eventDate =>
          eventDate.toDateString() === date.toDateString()
        );
        return isHighlighted ? (
          <Box
            sx={{
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              borderRadius: "50%",
              width: "100%",
              height: "50%",
            }}
          />
        ) : null;
      }
    };
  
    return (
      <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: "hidden",width: "87%"}}>
        <CardHeader
          title={
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Service Details
            </Typography>
          }
          sx={{ backgroundColor: "#f5f5f5", padding: "16px" }}
        />
        <CardContent sx={{ padding: "24px", }}>
          {/* Service Information */}
          <Box mb={2}>
            <Typography variant="body1">
              <strong>Description:</strong> {description}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1">
              <strong>Price:</strong> ${price}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1">
              <strong>Availability:</strong> {availability ? "Available" : "Not Available"}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1">
              <strong>Reviews:</strong> {reviews} stars
            </Typography>
          </Box>
  
          {/* Calendar for Availability */}
          <Box mt={3}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Availability Calendar
            </Typography>
            <Calendar
              tileContent={highlightDates} // Add the highlight function here
              className="custom-calendar" // Custom class for further CSS styling
            />
          </Box>
        </CardContent>
      </Card>
    );
  }
  
  // Define prop types for validation
  ServiceDetails.propTypes = {
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
    reviews: PropTypes.number.isRequired,
    calendarEvents: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  };
  
  export default ServiceDetails;