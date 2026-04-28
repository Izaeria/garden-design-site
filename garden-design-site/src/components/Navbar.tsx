import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Garden Studio</h2>
      <ul>
        <li>
          <NavLink to="/" end>
            Hem
          </NavLink>
        </li>
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
      </ul>
      <button>Kontakta mig</button>
    </nav>
  );
}

export default Navbar;
