// src/components/HeroSection.js
//import React from 'react';
 //import { Container, Typography, Button, Box } from '@mui/material';
/*
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#009688',
        color: 'white',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom>
          Hello , I am  Vijayasundaram
        </Typography>
        <Typography variant="h5" paragraph>
          To Know more about me ! 
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Click Below !
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
*/
import React from 'react';
 import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: 'url(https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg)', // Replace with your image URL
    backgroundSize: 'cover', // Ensures the background image covers the whole area
    backgroundPosition: 'center', // Centers the background image
    height: '100vh', // Set the height to 100% of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Hello , I am  Vijayasundaram
        </Typography>
        <Typography variant="h5" paragraph>
          To Know more about me ! 
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Click Below !
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
