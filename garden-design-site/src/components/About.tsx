import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
      <h3>Om mig</h3>
      <h2>Hej, jag heter Jennifer</h2>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
        faucibus eros. Cras et facilisis felis, a tristique nibh. Ut pulvinar
        semper arcu, id posuere nisl blandit at. Nam eu mattis lorem.
        Suspendisse eget posuere urna. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. In arcu enim, iaculis quis leo nec, ullamcorper
        molestie leo. Donec tincidunt interdum molestie. Nulla mollis quis nunc
        quis porttitor. Ut fermentum malesuada sem, at mollis est vehicula
        vitae.{" "}
      </p>
      <Link to="/om" className="button">
        Läs mer om mig
      </Link>
    </section>
  );
}
export default About;
