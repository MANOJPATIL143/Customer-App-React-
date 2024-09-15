import React, { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import PaymentForm from "./PaymentForm"
import {
  // Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import bookingsTableData from "./data/bookingsTableData";

// Your Stripe public key here
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

function Tables() {
  const { columns,  } = bookingsTableData; // Use the provided bookings data
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(null); // 'view', 'edit', 'cancel'
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [availabilityCheck, setAvailabilityCheck] = useState(null); // To simulate real-time availability checking

  const [rows, setRows] = useState(bookingsTableData.rows);
  const [newBooking, setNewBooking] = useState({
    id: "",
    customerName: "",
    date: "",
    time: "",
    status: "Pending", // Default status for new bookings
  });

  const [paymentDetails, setPaymentDetails] = useState({ bookingId: "", amount: 0 });
  const [paymentLoading, setPaymentLoading] = useState(false);


  const handleOpenDialog = (type, booking) => {
    setDialogType(type);
    setSelectedBooking(booking);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedBooking(null);
  };

  const handleCheckAvailability = () => {
    // Simulate real-time availability check
    setAvailabilityCheck("Available");
  };

  const handleConfirmBooking = () => {
    // Implement booking confirmation logic
    alert(`Booking confirmed for ${selectedBooking.customerName}`);
    handleCloseDialog();
  };

  const handleEditBooking = () => {
    // Implement booking edit logic
    alert(`Booking updated for ${selectedBooking.customerName}`);
    handleCloseDialog();
  };

  const handleCancelBooking = () => {
    // Implement booking cancel logic
    alert(`Booking cancelled for ${selectedBooking.customerName}`);
    handleCloseDialog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleAddBooking = () => {
    setPaymentDetails({ bookingId: newBooking.id, amount: 5000 });
    setRows([...rows, newBooking]);
    // Reset form after adding a booking
    setNewBooking({ id: "", customerName: "", date: "", time: "", status: "Pending" });
  };


  const handleDeleteBooking = (bookingId) => {
    console.log("Deleting booking with ID:", bookingId);
    const updatedRows = rows.filter((row) => row.id !== bookingId);
    setRows(updatedRows);
  };
  


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>

      <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.accessor}>{column.Header}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteBooking(row.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenDialog("view", row)} color="primary">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenDialog("edit", row)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenDialog("cancel", row)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box mt={4}>
          <Typography variant="h6">Add New Booking</Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "400px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              label="Booking ID"
              name="id"
              value={newBooking.id}
              onChange={handleChange}
              required
            />
            <TextField
              label="Customer Name"
              name="customerName"
              value={newBooking.customerName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={newBooking.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Time"
              name="time"
              type="time"
              value={newBooking.time}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddBooking}
            >
              Add Booking
            </Button>
          </form>
        </Box>

        {paymentDetails.amount > 0 && (
          <Elements stripe={stripePromise}>
            <PaymentForm
              bookingDetails={paymentDetails}
              onSuccess={() => alert("Payment successful")}
              onError={(error) => alert(`Payment error: ${error.message}`)}
              loading={paymentLoading}
              setLoading={setPaymentLoading}
            />
          </Elements>
        )}
    {/* </Box> */}
    </Box>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Booking Management</SoftTypography>
            </SoftBox>
            <SoftBox sx={{ padding: "1.5rem", overflowX: "auto" }}>
              <table style={{ width: "100%", borderSpacing: 0, textAlign: "center" }}>
                <thead>
                  <tr>
                    {columns.map((col, index) => (
                      <th key={index} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                        {col.Header}
                      </th>
                    ))}
                    <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((booking) => (
                    <tr key={booking.id}>
                      {columns.map((col, index) => (
                        <td
                          key={index}
                          style={{
                            padding: "10px",
                            borderBottom: "1px solid #ddd",
                            verticalAlign: "middle",
                          }}
                        >
                          {booking[col.accessor]}
                        </td>
                      ))}
                      <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                        <IconButton
                          onClick={() => handleOpenDialog("view", booking)}
                          sx={{ marginRight: "5px" }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleOpenDialog("edit", booking)}
                          sx={{ marginRight: "5px" }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleOpenDialog("cancel", booking)}>
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>

      {/* Booking Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === "view"
            ? "View Booking"
            : dialogType === "edit"
            ? "Edit Booking"
            : "Cancel Booking"}
        </DialogTitle>
        <DialogContent>
          {dialogType === "view" && selectedBooking && (
            <>
              <SoftTypography variant="body1">
                Booking ID: {selectedBooking.id}
              </SoftTypography>
              <SoftTypography variant="body1">
                Customer Name: {selectedBooking.customerName}
              </SoftTypography>
              <SoftTypography variant="body1">
                Date: {selectedBooking.date}
              </SoftTypography>
              <SoftTypography variant="body1">
                Time: {selectedBooking.time}
              </SoftTypography>
              <SoftTypography variant="body1">
                Status: {selectedBooking.status}
              </SoftTypography>
            </>
          )}
          {dialogType === "edit" && selectedBooking && (
            <>
              <SoftTypography variant="body1">
                Editing booking for {selectedBooking.customerName}
              </SoftTypography>
              <Button onClick={handleCheckAvailability} variant="contained">
                Check Availability
              </Button>
              {availabilityCheck && (
                <SoftTypography variant="body2">{availabilityCheck}</SoftTypography>
              )}
            </>
          )}
          {dialogType === "cancel" && selectedBooking && (
            <SoftTypography>
              Are you sure you want to cancel the booking for{" "}
              {selectedBooking.customerName}?
            </SoftTypography>
          )}
        </DialogContent>
        <DialogActions>
          {dialogType === "view" && <Button onClick={handleCloseDialog}>Close</Button>}
          {dialogType === "edit" && (
            <Button onClick={handleEditBooking} variant="contained">
              Save
            </Button>
          )}
          {dialogType === "cancel" && (
            <Button onClick={handleDeleteBooking} variant="contained" color="error">
              Cancel Booking
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Footer />
    </DashboardLayout>
  );
}



export default Tables;
