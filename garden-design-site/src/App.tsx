import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/om" element={<AboutPage />} />
          <Route path="/projekt" element={<ProjectsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/tjanster" element={<ServicesPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
