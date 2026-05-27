import Hero from "../components/home/Hero/Hero";
import About from "../components/home/About/About";
import Services from "../components/home/Services/Services";
import Projects from "../components/home/Projects/Projects";
import Contact from "../components/home/Contact/Contact";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default HomePage;
