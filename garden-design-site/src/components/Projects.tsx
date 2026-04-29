import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <h3>Utvalda Projekt</h3>
      <div>
        <div>
          <h4>Exempel</h4>
          <p>Var, plats </p>
          <Link to="/projekt">Se projekt</Link>
        </div>
      </div>
      <div>
        <div>
          <h4>Exempel</h4>
          <p>Var, plats </p>
          <Link to="/projekt">Se projekt</Link>
        </div>
      </div>
      <div>
        <div>
          <h4>Exempel</h4>
          <p>Var, plats </p>
          <Link to="/projekt">Se projekt</Link>
        </div>
      </div>
      <div>
        <div>
          <h4>Exempel</h4>
          <p>Var, plats </p>
          <Link to="/projekt">Se projekt</Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
