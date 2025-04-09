// src/App.js
import React, { useState } from 'react';
import { CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme } from '@mui/material/styles';

import HeroSection from './components/HeroSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Certification from './components/Certification/Certification';
import Project from './components/Project/Project';  // Add this import

import Header from './components/Header';

const theme = createTheme();

const App = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillSelect = (skillType) => {
    setSelectedSkill(skillType);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <CssBaseline />
      <HeroSection />
      <About onSkillSelect={handleSkillSelect}/>
      <Certification/>
      <Project selectedSkill={selectedSkill}/>
      <Contact/>
    </ThemeProvider>
  );
};

export default App;
