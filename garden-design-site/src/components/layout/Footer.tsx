import "./Footer.css";
import whiteLogo from "../../assets/whiteLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-brand">
          <img src={whiteLogo} alt="Logotyp" className="footer-logo" />
          <p className="footer-text">
            Trädgårdsdesign och skötsel för harmoniska utomhusmiljöer.
          </p>
        </section>

        <div className="footer-info">
          <nav className="footer-nav" aria-label="Sidfotsnavigering">
            <h3 className="footer-heading">Navigation</h3>

            <ul className="footer-list">
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/om">Om Mig</Link>
              </li>
              <li>
                <Link to="/tjanster">Tjänster</Link>
              </li>
              <li>
                <Link to="/projekt">Projekt</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>

          <section className="footer-contact">
            <h3 className="footer-heading">Kontakt</h3>

            <address className="footer-address">
              <a href="mailto:hej@gronarum.se">hej@gronarum.se</a>

              <a href="tel:+46123456789">+46 123 456 789</a>

              <span>Svedala, Sverige</span>
            </address>
          </section>
        </div>
      </div>

      <div className="footer-bottom">
        <button
          className="footer-top-link"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Tillbaka till toppen
        </button>
        <p>© 2026 Gröna Rum</p>
      </div>
    </footer>
  );
}

export default Footer;
