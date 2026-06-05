import { Link } from "react-router-dom";
import "./ServicesPage.css";

import servicesImage from "../assets//ServicesImages/illustrationplaceholder.png";
import pottedPlant from "../assets/ServicesImages/plant.svg";
import tree from "../assets/ServicesImages/tree.svg";
import wateringCan from "../assets/ServicesImages/watering-can.svg";
import questionMark from "../assets/ServicesImages/question-mark.svg";

function ServicesPage() {
  return (
    <main className="services-page">
      <div className="container">
        <section className="services-page-intro">
          <div className="services-page-intro-text">
            <h1 className="services-page-title">
              Trädgårdstjänster för en genomtänkt utemiljö
            </h1>

            <p className="services-page-description">
              Jag hjälper dig att skapa en trädgård som känns harmonisk, hållbar
              och anpassad efter både platsen och dina behov.
            </p>
          </div>

          <img
            src={servicesImage}
            alt="Planteringsplan och trädgårdsskiss"
            className="services-page-image"
          />
        </section>

        <section className="services-page-list">
          <article className="services-page-card">
            <img src={tree} alt="" className="services-page-icon" />

            <div>
              <h2 className="services-page-card-title">Trädgårdsdesign</h2>

              <p className="services-page-card-text">
                För dig som vill ha en tydlig helhetsplan för trädgården. Jag
                hjälper till med rumslighet, form, funktion, material och
                växtval.
              </p>

              <p className="services-page-card-text">
                Passar när du vill skapa en ny trädgård, förändra en befintlig
                plats eller få en tydligare riktning för utemiljön.
              </p>
            </div>
          </article>

          <article className="services-page-card">
            <img src={pottedPlant} alt="" className="services-page-icon" />

            <div>
              <h2 className="services-page-card-title">Planteringsplaner</h2>

              <p className="services-page-card-text">
                Jag tar fram växtförslag som passar platsens ljus, jord,
                skötselbehov och uttryck.
              </p>

              <p className="services-page-card-text">
                Fokus ligger på växter som samspelar över säsongerna och skapar
                en naturlig helhet.
              </p>
            </div>
          </article>

          <article className="services-page-card">
            <img src={questionMark} alt="" className="services-page-icon" />

            <div>
              <h2 className="services-page-card-title">Konsultation</h2>

              <p className="services-page-card-text">
                En rådgivande träff där vi går igenom dina idéer, platsens
                möjligheter och vad som kan utvecklas.
              </p>

              <p className="services-page-card-text">
                Passar om du vill ha vägledning innan du går vidare med ett
                större projekt.
              </p>
            </div>
          </article>

          <article className="services-page-card">
            <img src={wateringCan} alt="" className="services-page-icon" />

            <div>
              <h2 className="services-page-card-title">Skötselråd</h2>

              <p className="services-page-card-text">
                Jag hjälper dig förstå hur trädgården kan tas om hand över tid,
                med råd kring beskärning, växtvård och säsongsanpassad skötsel.
              </p>

              <p className="services-page-card-text">
                Målet är att trädgården ska fortsätta utvecklas och må bra även
                efter att den är anlagd.
              </p>
            </div>
          </article>
        </section>

        <section className="services-page-process">
          <h2 className="services-page-section-title">Så går det till</h2>

          <div className="services-page-process-grid">
            <article className="services-page-process-step">
              <span className="services-page-step-number">01</span>

              <h3 className="services-page-step-title">Första kontakt</h3>

              <p className="services-page-step-text">
                Du berättar kort om din trädgård, dina behov och vad du vill ha
                hjälp med.
              </p>
            </article>

            <article className="services-page-process-step">
              <span className="services-page-step-number">02</span>

              <h3 className="services-page-step-title">Genomgång</h3>

              <p className="services-page-step-text">
                Vi går igenom platsens förutsättningar, stil, funktion och
                skötselnivå.
              </p>
            </article>

            <article className="services-page-process-step">
              <span className="services-page-step-number">03</span>

              <h3 className="services-page-step-title">Förslag</h3>

              <p className="services-page-step-text">
                Du får ett genomtänkt förslag anpassat efter platsen och dina
                önskemål.
              </p>
            </article>

            <article className="services-page-process-step">
              <span className="services-page-step-number">04</span>

              <h3 className="services-page-step-title">Nästa steg</h3>

              <p className="services-page-step-text">
                Vi pratar igenom förslaget och vad som behövs för att ta
                projektet vidare.
              </p>
            </article>
          </div>
        </section>

        <section className="services-page-cta">
          <h2 className="services-page-cta-title">
            Vill du prata om din trädgård?
          </h2>

          <p className="services-page-cta-text">
            Hör gärna av dig så bokar vi ett första samtal.
          </p>

          <Link to="/kontakt" className="services-page-cta-link">
            Kontakta mig
          </Link>
        </section>
      </div>
    </main>
  );
}

export default ServicesPage;
