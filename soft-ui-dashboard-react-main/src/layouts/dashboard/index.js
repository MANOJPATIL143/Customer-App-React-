// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Map from "./MapContainer";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

// Service components
import PopularServices from "./serviceData/PopularServices";
import TrendingLocations from "./serviceData/TrendingLocations";
import Promotions from "./serviceData/Promotions";
import ServiceDetails from "./serviceData/ServiceDetails";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [tabValue, setTabValue] = useState(0);

  const handleSearchChange = (event) => setSearchQuery(event.target.value);
  const handleServiceTypeChange = (event) => setServiceType(event.target.value);
  const handleLocationChange = (event) => setLocation(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
    <DashboardNavbar />
 <SoftBox py={3}>
        <SoftBox py={3}>
        {/* Mini Statistics Cards */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            {/* Popular Services */}
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Popular Services" }}
                count="5 Services"
                percentage={{ color: "info", text: "Updated Weekly" }}
                icon={{ color: "info", component: "build" }}
              />
            </Grid>

            {/* Trending Locations */}
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                // title={{ text: "Trending Locations" }}
                count="10 Locations"
                percentage={{ color: "info", text: "Top Cities" }}
                icon={{ color: "info", component: "location_on" }}
              />
            </Grid>

            {/* Promotions */}
           {/* Promotions */}
           <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Current Promotions" }}
                count="3 Promotions"
                percentage={{ color: "success", text: "Limited Time Offers" }}
                icon={{ color: "info", component: "local_offer" }}
              />
            </Grid>
          </Grid>
        </SoftBox>

        {/* Popular Services and Trending Locations Section */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <PopularServices />
            </Grid>
            <Grid item xs={12} lg={5}>
              <TrendingLocations />
            </Grid>
          </Grid>
        </SoftBox>

        {/* Service Details and Promotions Section */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <ServiceDetails />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Promotions />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      </SoftBox>
    <SoftBox py={3}>
      {/* Search and Filters */}
      <SoftBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Search"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Select
              value={serviceType}
              onChange={handleServiceTypeChange}
              fullWidth
              displayEmpty
              inputProps={{ "aria-label": "Service Type" }}
            >
              <MenuItem value="">Service Type</MenuItem>
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={2}>
            <Select
              value={location}
              onChange={handleLocationChange}
              fullWidth
              displayEmpty
              inputProps={{ "aria-label": "Location" }}
            >
              <MenuItem value="">Location</MenuItem>
              <MenuItem value="location1">Location 1</MenuItem>
              <MenuItem value="location2">Location 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Date"
              type="date"
              value={date}
              onChange={handleDateChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </SoftBox>

      {/* Category Navigation */}
      <SoftBox mb={3}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Popular Services" />
          <Tab label="Trending Locations" />
          <Tab label="Promotions" />
          <Tab label="Service Details" />
        </Tabs>
      </SoftBox>

      {/* Display Based on Selected Tab */}
      {tabValue === 0 && <PopularServices />}
      {tabValue === 1 && <TrendingLocations />}
      {tabValue === 2 && <Promotions />}
      {tabValue === 3 && <ServiceDetails />}

      {/* Map Integration */}
      <SoftBox mt={3}>
        <Map center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
          {/* Add map layers and controls here */}
        </Map>
      </SoftBox>
    </SoftBox>
    <Footer />
  </DashboardLayout>
  );
}

export default Dashboard;
