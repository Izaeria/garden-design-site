import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="container">
        <section className="projects-page-header">
          <h1 className="projects-page-title">
            Utvalda trädgårdsprojekt och designförslag
          </h1>
          <p className="projects-page-description">
            Här visas ett urval av trädgårdsprojekt, illustrationsplaner och
            skissförslag.
          </p>
        </section>

        <section className="projects-page-grid">
          {projects.map((project) => (
            <article className="projects-page-card" key={project.id}>
              <div className="projects-page-card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects-page-card-image"
                />
              </div>

              <div className="projects-page-card-content">
                <p className="projects-page-card-category">
                  {project.category}
                </p>

                <h2>{project.title}</h2>
                <p>{project.shortDescription}</p>

                <Link
                  to={`/projects/${project.id}`}
                  className="projects-page-card-link"
                >
                  Visa projekt →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default ProjectsPage;
