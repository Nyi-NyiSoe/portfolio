import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

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
      <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
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
