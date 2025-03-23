// src/App.js
import React from 'react';
import { CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme } from '@mui/material/styles';

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Header from './components/Header';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <CssBaseline />
      <HeroSection />
    </ThemeProvider>
  );
};

export default App;
