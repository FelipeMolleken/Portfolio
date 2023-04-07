import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider } from './Theme';

import { LanguageProvider } from './Language'


function App() {
  return (
    <div className='background'>
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Footer />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}


export default App;
