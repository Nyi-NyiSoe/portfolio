import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import ProjectsPage from "./pages/Projects";
function App() {
  return (
   <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />  
    </Routes>
    
   </Router>
  );
}

export default App;
