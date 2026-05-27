import "./Projects.css";
import Card from "../../Card/Card";
import project1 from "../../../assets/ProjectsImages/project1.jpeg";
import project2 from "../../../assets/ProjectsImages/project2.jpeg";
import project3 from "../../../assets/ProjectsImages/project3.jpeg";
import project5 from "../../../assets/ProjectsImages/project5.jpeg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3 className="projects-title">Utvalda Projekt</h3>

      <div className="projects-grid">
        <Card
          className="projects-card"
          imgUrl={project1}
          title="Lummig trädgård med fontän"
          subtitle="Villa, Svedala"
          url="/projekt"
          linkText="Se projekt →"
        />

        <Card
          className="projects-card"
          imgUrl={project2}
          title="Skissförslag"
          subtitle="Skissförslag 'Woodland', skolarbete"
          url="/projekt"
          linkText="Se projekt →"
        />

        <Card
          className="projects-card"
          imgUrl={project3}
          title="Skissförslag"
          subtitle="Skissförslag, skolarbete"
          url="/projekt"
          linkText="Se projekt →"
        />

        <Card
          className="projects-card"
          imgUrl={project5}
          title="Grön Trädgård med valv"
          subtitle="Villa, Svedala"
          url="/projekt"
          linkText="Se projekt →"
        />
      </div>
    </section>
  );
}

export default Projects;
