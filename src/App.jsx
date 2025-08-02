import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/globals.css';
import ProblemSolving from './components/problemsolving/ProblemSolving';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ProblemSolving />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;