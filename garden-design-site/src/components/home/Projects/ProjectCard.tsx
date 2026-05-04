import { Link } from "react-router-dom";

interface CardProps {
  imgUrl?: string;
  title: string;
  subtitle: string;
  description?: string;
  projectUrl: string;
}

function ProjectCard({
  imgUrl,
  title,
  subtitle,
  description,
  projectUrl,
}: CardProps) {
  return (
    <div className="card">
      <img src={imgUrl} className="card-image" alt="" />
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle">{subtitle}</h3>
      <p className="card-description">{description}</p>
      <Link className="card-link" to={projectUrl}>
        Se projekt →
      </Link>
    </div>
  );
}
export default ProjectCard;
