// src/App.js
import React from 'react';
import { CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme } from '@mui/material/styles';

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />

      <Footer />
    </ThemeProvider>
  );
};

export default App;
