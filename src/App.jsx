import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider } from './Theme';


function App() {
  return (
    <div className='background'>
      <ThemeProvider>
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  );
}


export default App;
