import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div>
      <div className='background'>
        <Header />
        <Home />
        <AboutMe/>
        <Skills/>
        
      </div>
    </div>
  );
}

export default App;
