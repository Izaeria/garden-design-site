import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} className="hero-image" alt="" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          Trädgårdsdesign med omtanke för människa och miljö
        </h1>

        <p className="hero-text">
          Genomtänkt trädgårdsdesign med fokus på estetik, funktion och
          hållbarhet
        </p>

        <div className="hero-buttons">
          <a href="#kontakt" className="hero-button hero-button-primary">
            Kontakta mig
          </a>

          <Link to="/projekt" className="hero-button hero-button-secondary">
            Se projekt
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
