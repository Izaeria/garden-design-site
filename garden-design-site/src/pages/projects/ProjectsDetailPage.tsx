import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectsDetailPage.css";
import plantIcon from "../../assets/ServicesImages/plant.svg";
import locationIcon from "../../assets/ProjectsImages/location.svg";
import calendarIcon from "../../assets/ProjectsImages/calendar.svg";
import designIcon from "../../assets/ProjectsImages/design.svg";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="container">
          <p>Projektet hittades inte.</p>
          <Link to="/projects">Tillbaka till projekt</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <div className="container">
        <section className="project-detail-hero">
          <div className="project-detail-hero-text">
            <h1>{project.title}</h1>

            <p className="project-detail-location">
              {project.category}, {project.location}
            </p>

            <p className="project-detail-intro">{project.shortDescription}</p>
          </div>

          <div className="project-detail-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
        </section>

        <section className="project-detail-overview">
          <aside className="project-detail-info-card">
            <div className="project-detail-info-item">
              <img src={plantIcon} alt="" className="project-detail-icon" />

              <div>
                <span>Typ</span>
                <p>{project.category}</p>
              </div>
            </div>

            <div className="project-detail-info-item">
              <img src={locationIcon} alt="" className="project-detail-icon" />

              <div>
                <span>Plats</span>
                <p>{project.location}</p>
              </div>
            </div>

            <div className="project-detail-info-item">
              <img src={calendarIcon} alt="" className="project-detail-icon" />

              <div>
                <span>År</span>
                <p>{project.year}</p>
              </div>
            </div>

            <div className="project-detail-info-item">
              <img src={designIcon} alt="" className="project-detail-icon" />

              <div>
                <span>Omfattning</span>
                <p>{project.services.join(" + ")}</p>
              </div>
            </div>
          </aside>

          <div className="project-detail-text">
            <section className="project-detail-text-section">
              <p className="project-detail-label">Om projektet</p>
              <p>{project.description}</p>
            </section>

            <section className="project-detail-text-section">
              <p className="project-detail-label">Utmaning</p>
              <p>{project.challenge}</p>
            </section>

            <section className="project-detail-text-section">
              <p className="project-detail-label">Lösning</p>
              <p>{project.solution}</p>
            </section>
          </div>
        </section>

        <Link to="/projekt" className="project-detail-back-link">
          ← Tillbaka till projekt
        </Link>
      </div>
    </main>
  );
}

export default ProjectDetailPage;
