import "./Footer.css";
import whiteLogo from "../../assets/whiteLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={whiteLogo} alt="Logotyp" className="footer-logo" />
      <p>© 2026 Garden By Jennifer</p>
    </footer>
  );
}
export default Footer;
