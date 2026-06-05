import { Link } from "react-router-dom";
import "./AboutPage.css";
import profileImg from "../assets/profile.jpeg";
import gardenImg from "../assets/AboutPageImages/gardenImage.png";

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-intro">
        <div className="container">
          <div className="about-page-img">
            <div className="about-page-text">
              <h1 className="about-page-title">
                Trädgårdsdesign med känsla för platsen
              </h1>

              <p className="about-page-description">
                Jag är utbildad trädgårdsingenjör med inriktning design och
                brinner för att skapa gröna miljöer där människor trivs. Mitt
                fokus ligger på hållbara lösningar och en naturlig helhet mellan
                växter, material och rum.
              </p>
            </div>

            <img
              src={profileImg}
              className="about-profile-image"
              alt="Profilbild"
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="about-page-sections">
          <section className="about-page-card">
            <h2 className="about-page-card-title">Min bakgrund</h2>

            <p className="about-page-card-text">
              Genom min utbildning har jag fått kunskap om växter, formgivning
              och hur utemiljöer kan planeras för att passa både platsen och
              människorna som använder den.
            </p>
          </section>

          <section className="about-page-card">
            <h2 className="about-page-card-title">Mitt arbetssätt</h2>

            <p className="about-page-card-text">
              Jag arbetar med helheten: växtval, material, rumslighet och
              känslan på platsen. Målet är att skapa trädgårdar som känns
              personliga, hållbara och genomtänkta.
            </p>
          </section>

          <section className="about-page-card">
            <h2 className="about-page-card-title">Design med omtanke</h2>

            <p className="about-page-card-text">
              Jag inspireras av naturliga uttryck, säsongernas skiftningar och
              lösningar som fungerar över tid.
            </p>
          </section>
        </div>
        <img
          src={gardenImg}
          className="about-garden-image"
          alt="Lummig trädgård med gång, växter och sittplats"
        />

        <section className="about-page-cta">
          <h2 className="about-page-cta-title">Vill du veta mer?</h2>

          <p className="about-page-cta-text">
            Hör gärna av dig om du vill prata om din trädgård eller ett projekt.
          </p>

          <Link to="/kontakt" className="about-page-cta-link">
            Kontakta mig
          </Link>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
