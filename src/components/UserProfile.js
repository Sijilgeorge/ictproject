import React, { useState, useEffect } from 'react';
import {
  Typography,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

import 'font-awesome/css/font-awesome.min.css';
import './userProfile.css';
import image from './back.jpg'

const BookCounter = ({ bookCount }) => {
  return (
    <Typography variant="h6" color="textSecondary">
      Number of Books: {bookCount}
    </Typography>
  );
};

const UserProfileDetails = ({ userDetails, onUpdateDetails }) => {
  const [name, setName] = useState(userDetails.name);
  const [place, setPlace] = useState(userDetails.place);
  const [age, setAge] = useState(userDetails.age);
  const [email, setEmail] = useState(userDetails.email);
  const [education, setEducation] = useState(userDetails.education);
  const [phoneNumber, setPhoneNumber] = useState(userDetails.contactDetails.phoneNumber);
  const [emailId, setEmailId] = useState(userDetails.contactDetails.emailId);
  const [termsAndConditions, setTermsAndConditions] = useState(userDetails.termsAndConditions);

  const handleUpdate = () => {
    const updatedDetails = {
      name,
      place,
      age,
      email,
      education,
      contactDetails: {
        phoneNumber,
        emailId,
      },
      termsAndConditions,
    };
    onUpdateDetails(updatedDetails);
  };

  return (
   <div>
      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="Place"
        fullWidth
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="Age"
        fullWidth
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="Education"
        fullWidth
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="Phone Number"
        fullWidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label="Email ID"
        fullWidth
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="termsAndConditions">
          Terms and Conditions:
          <input
            id="termsAndConditions"
            type="checkbox"
            checked={termsAndConditions}
            onChange={(e) => setTermsAndConditions(e.target.checked)}
            style={{ marginLeft: '8px' }}
          />
        </label>
      </div>
      
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState('path_to_profile_image.jpg');
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    name: 'John Doe',
    place: 'Sample Place',
    age: 30,
    email: 'john.doe@example.com',
    education: 'Sample Education',
    contactDetails: {
      phoneNumber: '1234567890',
      emailId: 'john.doe@example.com',
    },
    termsAndConditions: false,
  });

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setProfilePic(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleUpdateProfileDetails = (updatedDetails) => {
    setLoginDetails(updatedDetails);
    handleCloseEditDialog();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <Avatar
          src={profilePic}
          alt="Profile Image"
          style={{ width: '140px', height: '140px', cursor: 'pointer' }}
          onClick={() => document.getElementById('profilePicInput').click()}
        />
        <input
          type="file"
          id="profilePicInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfilePicChange}
        />
      </div>

      <div
        style={{
          marginBottom: '32px',
          backgroundColor: '#ffffff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        }}
      >
     <div className='container'>
  <table className='profile-table'>
    <tbody>
      <tr>
        <td>
          <Typography variant="h5" gutterBottom>
            Name:
          </Typography>
        </td>
        <td>
          <Typography variant="h5" gutterBottom>
            {loginDetails.name}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Email:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {loginDetails.email}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary">
            Place:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary">
            {loginDetails.place}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary">
            Age:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary">
            {loginDetails.age}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary">
            Education:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary">
            {loginDetails.education}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary">
            Phone Number:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary">
            {loginDetails.contactDetails.phoneNumber}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary">
            Email ID:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary">
            {loginDetails.contactDetails.emailId}
          </Typography>
        </td>
      </tr>
      <tr>
        <td>
          <Typography variant="h6" color="textSecondary">
            Terms and Conditions:
          </Typography>
        </td>
        <td>
          <Typography variant="h6" color="textSecondary">
            {loginDetails.termsAndConditions ? 'Accepted' : 'Not Accepted'}
          </Typography>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        <Button variant="outlined" color="primary" onClick={handleOpenEditDialog} style={{ marginTop: '16px' }}>
          Edit Profile
        </Button>
        <BookCounter bookCount={5} /> {/* Replace '5' with the actual count of books from the library */}
      </div>
      

      <Button className="logout-button" variant="contained" color="primary" style={{ marginTop: '32px' }}>
        Logout
      </Button>

      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Profile Details</DialogTitle>
        <DialogContent>
          <UserProfileDetails userDetails={loginDetails} onUpdateDetails={handleUpdateProfileDetails} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserProfile;
