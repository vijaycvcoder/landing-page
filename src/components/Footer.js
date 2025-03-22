// src/components/Footer.js
import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: 'white', padding: 3 }}>
      <Container>
        <Typography variant="body2" align="center">
          © 2025 My Website. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
