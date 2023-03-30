import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

// const menuLinks = document.querySelectorAll('#menu a');

// menuLinks.forEach((link) => {
//   link.addEventListener("click", ()=> console.log("clicked"));
// });
  



function App() {
  return (
      <div className='background'>
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
  );
}


export default App;
