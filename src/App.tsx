import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App bg-[#111F44] text-white">
      <Header />
      <Sidebar />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="education"><Education /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
}




export default App;
