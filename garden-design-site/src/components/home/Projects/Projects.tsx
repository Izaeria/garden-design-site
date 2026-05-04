import "./Projects.css";
import ProjectCard from "./ProjectCard";
import project1 from "../../../assets/ProjectsImages/project1.jpeg";
import project2 from "../../../assets/ProjectsImages/project2.jpeg";
import project3 from "../../../assets/ProjectsImages/project3.jpeg";
import project5 from "../../../assets/ProjectsImages/project5.jpeg";

function Projects() {
  return (
    <section id="projects">
      <h3 className="projects-title">Utvalda Projekt</h3>

      <div className="projects-grid">
        <ProjectCard
          imgUrl={project1}
          title="Lummig trädgård med fontän"
          subtitle="Villa, Svedala"
          projectUrl="/projekt"
        />

        <ProjectCard
          imgUrl={project2}
          title="Skissförslag"
          subtitle="Skissförslag 'Woodland', skolarbete"
          projectUrl="/projekt"
        />

        <ProjectCard
          imgUrl={project3}
          title="Skissförslag"
          subtitle="Skissförslag, skolarbete"
          projectUrl="/projekt"
        />

        <ProjectCard
          imgUrl={project5}
          title="Grön Trädgård med valv"
          subtitle="Villa, Svedala"
          projectUrl="/projekt"
        />
      </div>
    </section>
  );
}

export default Projects;
