import React,{useState} from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";


function Overview() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      serviceId: 1,
      userName: "Alice",
      rating: 4,
      comment: "Great service!",
    },
    {
      id: 2,
      serviceId: 2,
      userName: "Bob",
      rating: 5,
      comment: "Excellent experience!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    serviceId: 1,
    userName: "",
    rating: 1,
    comment: "",
  });

  const bookingHistory = [
    {
      id: 1,
      date: "2024-09-01",
      service: "Consultation",
      provider: "Dr. Smith",
    },
    {
      id: 2,
      date: "2024-09-05",
      service: "Follow-up",
      provider: "Dr. Jones",
    },
    {
      id: 3,
      date: "2024-09-10",
      service: "Routine Check-up",
      provider: "Dr. Taylor",
    },
  ];

  // Hardcoded saved services data
  const savedServices = [
    {
      id: 1,
      name: "General Consultation",
      description: "A comprehensive medical consultation.",
    },
    {
      id: 2,
      name: "Dental Check-up",
      description: "Regular dental check-up and cleaning.",
    },
    {
      id: 3,
      name: "Physical Therapy",
      description: "Therapeutic services for physical rehabilitation.",
    },
  ];

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = () => {
    if (newReview.userName && newReview.comment) {
      setReviews((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...newReview,
        },
      ]);
      setNewReview({ serviceId: 1, userName: "", rating: 1, comment: "" });
    }
  };

  const getAverageRating = (serviceId) => {
    const serviceReviews = reviews.filter((review) => review.serviceId === serviceId);
    if (serviceReviews.length === 0) return 0;
    const totalRating = serviceReviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / serviceReviews.length).toFixed(1);
  };

  return (
    <DashboardLayout>
      <Header />

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
          </Grid>
     
        </Grid>
      </SoftBox>

      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Booking History
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                View your recent booking history and manage your appointments.
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            {bookingHistory.map((booking) => (
              <Card key={booking.id} sx={{ mb: 2, p: 2 }}>
                <SoftTypography variant="h6" fontWeight="medium">
                  {booking.date} - {booking.service}
                </SoftTypography>
                <SoftTypography variant="body2" color="text">
                  Provider: {booking.provider}
                </SoftTypography>
              </Card>
            ))}
          </SoftBox>
        </Card>
      </SoftBox>

      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Saved Services
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Manage your saved services and access them quickly.
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            {savedServices.map((service) => (
              <Card key={service.id} sx={{ mb: 2, p: 2 }}>
                <SoftTypography variant="h6" fontWeight="medium">
                  {service.name}
                </SoftTypography>
                <SoftTypography variant="body2" color="text">
                  {service.description}
                </SoftTypography>
              </Card>
            ))}
          </SoftBox>
        </Card>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Reviews and Ratings
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Share your thoughts and rate the services you’ve used.
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={2}>
              {savedServices.map((service) => (
                <Grid item xs={12} md={6} key={service.id}>
                  <Card sx={{ mb: 2, p: 2 }}>
                    <SoftTypography variant="h6" fontWeight="medium">
                      {service.name}
                    </SoftTypography>
                    <SoftTypography variant="body2" color="text">
                      {service.description}
                    </SoftTypography>
                    <SoftBox display="flex" alignItems="center" mt={1}>
                      <StarIcon color="primary" />
                      <SoftTypography variant="body2" color="text" ml={1}>
                        Average Rating: {getAverageRating(service.id)} / 5
                      </SoftTypography>
                    </SoftBox>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <SoftBox mt={4}>
              <Card>
                <SoftBox p={2}>
                  <SoftBox mb={1}>
                    <SoftTypography variant="h6" fontWeight="medium">
                     Rating And Review
                    </SoftTypography>
                  </SoftBox>
                  <TextField
                    name="userName"
                    label="Your Name"
                    fullWidth
                    margin="normal"
                    value={newReview.userName}
                    onChange={handleReviewChange}
                  />
                  <TextField
                    name="rating"
                    label="Rating (1-5)"
                    type="number"
                    fullWidth
                    margin="normal"
                    inputProps={{ min: 1, max: 5 }}
                    value={newReview.rating}
                    onChange={handleReviewChange}
                  />
                  <TextField
                    name="comment"
                    label="Your Comment"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    value={newReview.comment}
                    onChange={handleReviewChange}
                  />
                  <SoftBox mt={2}>
                    <Button variant="contained" color="primary" onClick={handleSubmitReview}>
                      Submit Review
                    </Button>
                  </SoftBox>
                </SoftBox>
              </Card>
            </SoftBox>
          </SoftBox>
        </Card>
      </SoftBox>        
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
