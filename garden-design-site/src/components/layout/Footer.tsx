import "./Footer.css";
import whiteLogo from "../../assets/whiteLogo.png";

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
                <a href="/">Hem</a>
              </li>
              <li>
                <a href="/om">Om Mig</a>
              </li>
              <li>
                <a href="/tjanster">Tjänster</a>
              </li>
              <li>
                <a href="/projekt">Projekt</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact">
            <h3 className="footer-heading">Kontakt</h3>

            <address className="footer-address">
              <a href="mailto:hej@greengarden.se">hej@gronarum.se</a>

              <a href="tel:+46123456789">+46 123 456 789</a>

              <span>Svedala, Sverige</span>
            </address>
          </section>
        </div>
      </div>

      <div className="footer-bottom">
        <a className="footer-top-link" href="#top">
          ↑ Tillbaka till toppen
        </a>
        <p>© 2026 Gröna Rum</p>
      </div>
    </footer>
  );
}
export default Footer;
