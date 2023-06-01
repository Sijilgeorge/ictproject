import React from 'react';

const Logo = () => {
  return (
    <div style={logoStyle}>
      <img src="image.png" alt="Logo" style={imageStyle} />
      <h1 style={textStyle}>logo</h1>
    </div>
  );
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const imageStyle = {
  width: '50px',
  height: '50px',
  objectFit: 'cover',
  borderRadius: '50%',
};

const textStyle = {
  marginLeft: '10px',
  fontSize: '24px',
  color: '#ffffff', // Replace with your desired text color
  fontFamily: 'Arial, sans-serif', // Replace with your desired font family
};

export default Logo;
