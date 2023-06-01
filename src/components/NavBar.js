import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Logo from './Logo';

const NavBar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(0, 0, 0, 0.5)', 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" className='navbar'>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >
        <Logo/>
       
        <Button component={Link} to="/home" color="inherit" >
          home
        </Button>
        
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;