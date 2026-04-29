import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <h1>Trädgårdsdesign med fokus på hållbarhet</h1>
      <p>Vi skapar harmoniska och funktionella utemiljöer</p>
      <Link to="/projekt" className="button">
        Se projekt
      </Link>
    </section>
  );
}

export default Hero;
