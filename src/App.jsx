import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
function App() {
  
  return (
    
      <Router>
       <div className="bg-black">
       <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </div>
      </Router>
    
  );
}

export default App
