import Form from "../../Form/form";
import "./Contact.css";
import Mail from "../../../assets/ContactImages/mail.svg?react";
import Phone from "../../../assets/ContactImages/location.svg?react";
import Location from "../../../assets/ContactImages/phone.svg?react";

function Contact() {
  return (
    <>
      <section className="contact-info">
        <h2 className="contact-title">Kontakt</h2>
        <h3 className="contact-cta">Hör gärna av dig!</h3>
        <p className="contact-subtitle">
          Är du redo att skapa din drömträdgård?
        </p>
        <p className="contact-subtitle">
          Kontakta mig så bokar vi ett första möte.
        </p>

        <div className="contact-details">
          <div className="contact-detail">
            <Mail className="contact-icon" />
            <p>Hej@gronarum.se</p>
          </div>
          <div className="contact-detail">
            <Phone className="contact-icon" />
            <p>070-000 000 00</p>
          </div>
          <div className="contact-detail">
            <Location className="contact-icon" />
            <p>Svedala med omnejd</p>
          </div>
        </div>

        <section id="kontakt" className="contact-form-section">
          <div>
            <Form />
          </div>
        </section>
      </section>
    </>
  );
}

export default Contact;
