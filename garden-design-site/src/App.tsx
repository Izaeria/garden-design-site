import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/om" element={<About />} />
      <Route path="/projekt" element={<Projects />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/tjanster" element={<Services />} />
    </Routes>
  );
}

export default App;
