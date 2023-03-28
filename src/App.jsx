import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className='background'>
        <Header />
        <Home />
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
