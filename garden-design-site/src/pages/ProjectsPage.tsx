import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <>
      <section>
        <h1>Projekt</h1>
        <p>Här hittar du ett urval av tidigare arbeten och inspiration.</p>
      </section>

      <ul>
        <li>
          <h2> Privat trädgård i Göteborg</h2>
          <p>
            En lugn och grön oas med fokus på perenner och naturliga material.
          </p>
          <Link to="/projekt">Läs mer</Link>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Modern villaträdgård</h2>
          <p> Strukturerad design med tydliga linjer och lättskötta ytor.</p>
          <Link to="/projekt">Läs mer</Link>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Året runt-grönt</h2>
          <p>Trädgård som håller formen även vintertid.</p>
          <Link to="/projekt">Läs mer</Link>
        </li>
      </ul>
    </>
  );
}
export default ProjectsPage;
