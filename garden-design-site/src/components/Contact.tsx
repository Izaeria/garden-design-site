function Contact() {
  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <h3>Hör gärna av dig!</h3>
      <p>Är du redo att skapa din drömträdgård?</p>
      <p>Kontakta mig så bokar vi ett första möte.</p>

      <div>
        <p>E-post: </p>
        <p>Telefon:</p>
        <p>Svedala med omnejd</p>
      </div>

      <form>
        <input type="text" placeholder="Namn" />
        <input type="email" placeholder="E-post" />
        <textarea placeholder="Meddelande"></textarea>
        <button type="submit">Skicka meddelande</button>
      </form>
    </section>
  );
}

export default Contact;
