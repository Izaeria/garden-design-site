import { Link } from "react-router-dom";

interface CardProps {
  className?: string;
  imgUrl?: string;
  title: string;
  subtitle?: string;
  description?: string;
  linkText?: string;
  url?: string;
}

function Card({
  className,
  imgUrl,
  title,
  subtitle,
  description,
  linkText,
  url,
}: CardProps) {
  return (
    <div className={`card ${className ?? ""}`}>
      <img src={imgUrl} className="card-image" alt="" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {subtitle && <h3 className="card-subtitle">{subtitle}</h3>}
        {description && <p className="card-description">{description}</p>}
        {url && linkText && (
          <Link className="card-link" to={url}>
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}
export default Card;
