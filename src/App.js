// src/App.js
import React from 'react';
import { CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme } from '@mui/material/styles';

import HeroSection from './components/HeroSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <CssBaseline />
      <HeroSection />
      <About/>
      <Contact/>
    </ThemeProvider>
  );
};

export default App;
