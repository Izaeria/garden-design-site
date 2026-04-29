function ContactPage() {
  return (
    <>
      <section>
        <h1>Kontakt</h1>
        <p>
          Redo att förverkliga din trädgård? Skicka ett meddelande så hör jag av
          mig!
        </p>
      </section>

      <section>
        <h2>Kontaktuppgifter</h2>
        <p>Email: ...</p>
        <p>Telefon: ...</p>
      </section>

      <section>
        <form>
          <label>Namn</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Meddelande</label>
          <textarea />

          <button>Skicka</button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
