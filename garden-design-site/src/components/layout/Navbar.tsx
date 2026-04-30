import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRequestClick = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("kontakt")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="Logotyp" className="navbar-logo" />
      </Link>
      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul
        className={`navbar-links ${isOpen ? "open" : ""}`}
        onClick={(e) => {
          const target = e.target as HTMLElement;

          if (target.closest("a")) {
            setIsOpen(false);
          }
        }}
      >
        <li>
          <NavLink to="/om">Om mig</NavLink>
        </li>
        <li>
          <NavLink to="/tjanster">Tjänster</NavLink>
        </li>
        <li>
          <NavLink to="/projekt">Projekt</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
        <li className="navbar-cta">
          <button onClick={handleRequestClick} className="navbar-cta-button">
            Skicka förfrågan
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
