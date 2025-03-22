// src/components/FeaturesSection.js
import React from 'react';
import { Grid2, Box, Typography, Paper } from '@mui/material';

const FeatureSection = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Features
      </Typography>
      <Grid2 container spacing={4}>
        <Grid2 xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6">Feature 1</Typography>
            <Typography variant="body1" paragraph>
              Description of the feature goes here.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6">Feature 2</Typography>
            <Typography variant="body1" paragraph>
              Description of the feature goes here.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6">Feature 3</Typography>
            <Typography variant="body1" paragraph>
              Description of the feature goes here.
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default FeatureSection;