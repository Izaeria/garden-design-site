import "./About.css";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/profile.jpeg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image-wrapper">
        <img src={profileImg} className="profile-image" alt="" />
      </div>
      <div className="about-content">
        <p className="about-label">Om mig</p>
        <h2 className="about-title">Hej, jag heter Jennifer</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          faucibus eros. Cras et facilisis felis, a tristique nibh.
        </p>
        <p className="about-text">
          {" "}
          Nam eu mattis lorem. Suspendisse eget posuere urna. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <Link to="/om" className="about-button">
          Läs mer om mig
        </Link>
      </div>
    </section>
  );
}
export default About;
