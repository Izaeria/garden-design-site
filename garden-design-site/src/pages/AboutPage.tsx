import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <section>
        <h1>Om mig</h1>
        <p>
          {" "}
          Jag är utbildad trädgårdsingenjör med inriktning design och brinner
          för att skapa gröna miljöer där människor trivs. Mitt fokus ligger på
          hållbara lösningar och en naturlig helhet mellan växter, material och
          rum.
        </p>
      </section>

      <section>
        <h2>Min bakgrund</h2>
        <p>
          Genom min utbildning har jag fått kunskap om växter, formgivning och
          hur utemiljöer kan planeras för att passa både platsen och människorna
          som använder den.
        </p>
      </section>

      <section>
        <h2>Mitt arbetssätt</h2>
        <p>
          Jag arbetar med helheten: växtval, material, rumslighet och känslan på
          platsen. Målet är att skapa trädgårdar som känns personliga, hållbara
          och genomtänkta.
        </p>
      </section>

      <section>
        <h2>Design med omtanke</h2>
        <p>
          Jag inspireras av naturliga uttryck, säsongernas skiftningar och
          lösningar som fungerar över tid.
        </p>
      </section>

      <section>
        <h2>Vill du veta mer?</h2>
        <p>
          Hör gärna av dig om du vill prata om din trädgård eller ett projekt.
        </p>
        <Link to="/kontakt">Kontakta mig</Link>
      </section>
    </>
  );
}

export default AboutPage;
