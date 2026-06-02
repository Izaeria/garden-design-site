import Form from "../components/Form/form";
import "./ContactPage.css";

import Mail from "../assets/ContactImages/mail.svg?react";
import Phone from "../assets/ContactImages/phone.svg?react";
import Location from "../assets/ContactImages/location.svg?react";

function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">
        <section className="contact-page-wrapper">
          <section className="contact-page-info">
            <h1 className="contact-page-title">Skicka en förfrågan</h1>

            <p className="contact-page-description">
              Är du redo att skapa en trädgård som passar både platsen och dina
              behov?
            </p>

            <p className="contact-page-description">
              Jag återkommer vanligtvis inom 1–2 arbetsdagar. Därefter bokar vi
              ett första samtal där vi går igenom dina önskemål, platsens
              förutsättningar och hur jag kan hjälpa dig vidare.
            </p>

            <div className="contact-page-details">
              <div className="contact-page-detail">
                <Mail className="contact-page-icon" />
                <p className="contact-page-detail-text">hej@gronarum.se</p>
              </div>

              <div className="contact-page-detail">
                <Phone className="contact-page-icon" />
                <p className="contact-page-detail-text">070-000 00 00</p>
              </div>

              <div className="contact-page-detail">
                <Location className="contact-page-icon" />
                <p className="contact-page-detail-text">Svedala med omnejd</p>
              </div>
            </div>
          </section>

          <section id="kontaktPage" className="contact-page-form-section">
            <div className="contact-page-form">
              <Form />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
