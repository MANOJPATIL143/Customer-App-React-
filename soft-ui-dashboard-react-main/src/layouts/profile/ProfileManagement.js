import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import ProfileInfoCard from './ProfileInfoCard';
import ProfileIcon from '@mui/icons-material/AccountCircle'; // Replace with the appropriate icon

const ProfileManagement = ({ profileDetails, onEditProfile }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">Profile Management</Typography>
      <ProfileInfoCard
        title="Profile Information"
        description="Manage your profile details, including updating your contact information and profile picture."
        info={profileDetails}
        social={[]}
        action={{ route: "", tooltip: "Edit Profile", onClick: onEditProfile }}
      />
    </CardContent>
  </Card>
);

ProfileManagement.propTypes = {
  profileDetails: PropTypes.shape({
    fullName: PropTypes.string,
    mobile: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  onEditProfile: PropTypes.func.isRequired,
};

export default ProfileManagement;
