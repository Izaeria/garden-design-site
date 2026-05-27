import "./About.css";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/profile.jpeg";
import leaf from "../../../assets/leaf.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <img src={profileImg} className="profile-image" alt="profilbild" />

        <p className="about-label">Om mig</p>
        <h2 className="about-title">Hej, jag heter Jennifer</h2>
        <p className="about-text-top">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          faucibus eros. Cras et facilisis felis, a tristique nibh.
        </p>
        <p className="about-text-bottom">
          Nam eu mattis lorem. Suspendisse eget posuere urna. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <Link to="/om" className="about-button">
          Läs mer om mig
        </Link>
      </div>
      <img src={leaf} className="about-leaf-image" alt="" />
    </section>
  );
}
export default About;
