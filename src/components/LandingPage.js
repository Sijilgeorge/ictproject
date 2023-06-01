import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import bookImage from './book.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bookImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:'100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden',
    color: theme.palette.common.white,
    zoom:'1.19'
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(2, 4),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  
  

  return (
    
    
    <Container className={classes.container}   >
      <Grid container justify="center">
        <Grid item xs={12} className={classes.textContainer}>
          <Typography variant="h2" component="h1" gutterBottom style={{color:"white"}}>
            hello and Welcome to the home 
          </Typography>
          <Typography variant="h5" component="p" gutterBottom style={{color:"white"}}>
            Welcome to world of books
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link} to='/login'
          >
            login
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            signup
          </Button>
        </Grid>
      </Grid>
      <div  style={{
        backgroundImage:'book.jpg'
      }}>
        
        
      </div>
    </Container>
  );
};

export default LandingPage;
