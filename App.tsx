import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

// Landing page component combining sections
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <About />
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-black min-h-screen text-slate-100 selection:bg-gray-700 selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
