import Navbar from "../Navbar";
import Footer from "../Footer";
import About from "../Aboutme";
import { Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Project from "../Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
