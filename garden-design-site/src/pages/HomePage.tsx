import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
