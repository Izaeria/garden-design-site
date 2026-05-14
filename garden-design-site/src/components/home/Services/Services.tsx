import Card from "../../Card/Card";
import "./Services.css";
import pottedPlant from "../../../assets/ServicesImages/plant.svg";
import tree from "../../../assets/ServicesImages/tree.svg";
import wateringCan from "../../../assets/ServicesImages/watering-can.svg";
import questionMark from "../../../assets/ServicesImages/question-mark.svg";

function Services() {
  return (
    <section id="services" className="services">
      <h3 className="services-title">Tjänster</h3>
      <h2 className="services-subtitle">Detta kan jag hjälpa dig med</h2>
      <Card
        className="services-card"
        imgUrl={tree}
        title="Trädgårdsdesign"
        description="  Lorem ipsum dolor sit amet, consectetur adipiscing eh4t. Donec
            fermentum imperdiet augue a scelerisque. Fusce sagittis ultrices
            eh4t non imperdiet. "
      />
      <Card
        className="services-card"
        imgUrl={pottedPlant}
        title="Planteringsplaner"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eh4t. Donec
          fermentum imperdiet augue a scelerisque. Fusce sagittis ultrices eh4t
          non imperdiet."
      />
      <Card
        className="services-card"
        imgUrl={questionMark}
        title="Konsultation"
        description="Donec ut faucibus ipsum, a accumsan erat. In nec molh4s
          magna, et ultricies erat."
      />
      <Card
        className="services-card"
        imgUrl={wateringCan}
        title="Skötselråd"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eh4t. Donec
          fermentum imperdiet augue a scelerisque. Fusce sagittis ultrices eh4t
          non imperdiet."
      />
    </section>
  );
}

export default Services;
