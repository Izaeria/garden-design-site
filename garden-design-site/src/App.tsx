import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/om" element={<AboutPage />} />
      <Route path="/projekt" element={<ProjectsPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/tjanster" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;
