// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Icons
import ChatIcon from "@mui/icons-material/Chat";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// Placeholder FAQs Data
const faqData = [
  {
    question: "How can I reset my password?",
    answer: "To reset your password, go to Settings > Account > Reset Password.",
  },
  {
    question: "How can I update my profile information?",
    answer: "To update your profile information, go to Profile > Edit Profile.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via the in-app chat feature or email support@example.com.",
  },
];

function FaqSection() {
  return (
    <SoftBox>
      <SoftTypography variant="h6" fontWeight="medium" mb={2}>
        Frequently Asked Questions (FAQs)
      </SoftTypography>
      {faqData.map((faq, index) => (
        <SoftBox key={index} mb={2} p={2} sx={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
          <SoftTypography variant="subtitle1" fontWeight="bold">
            {faq.question}
          </SoftTypography>
          <SoftTypography variant="body2" color="text">
            {faq.answer}
          </SoftTypography>
        </SoftBox>
      ))}
    </SoftBox>
  );
}

function ChatSupport() {
  return (
    <SoftBox p={2} sx={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
      <SoftBox display="flex" alignItems="center" mb={2}>
        <ChatIcon fontSize="large" sx={{ mr: 1, color: "primary.main" }} />
        <SoftTypography variant="h6" fontWeight="medium">
          In-App Chat Support
        </SoftTypography>
      </SoftBox>
      <SoftTypography variant="body2" color="text">
        Start a chat with our support team for immediate assistance. Our team is available 24/7 to help you with any issues or questions you may have.
      </SoftTypography>
    </SoftBox>
  );
}

function CustomerSupport() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <ChatSupport />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <FaqSection />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <SoftBox p={2} sx={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
                <HelpOutlineIcon fontSize="large" sx={{ mb: 1, color: "primary.main" }} />
                <SoftTypography variant="h6" fontWeight="medium" mb={1}>
                  Need Help?
                </SoftTypography>
                <SoftTypography variant="body2" color="text">
                  Feel free to explore our FAQs or start a chat for direct support.
                </SoftTypography>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CustomerSupport;
