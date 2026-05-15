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
      <h2 className="services-subtitle">Det här kan jag hjälpa dig med</h2>
      <div className="services-grid">
        <Card
          className="services-card"
          imgUrl={tree}
          title="Trädgårdsdesign"
          description="Helhetslösningar för din trädgård från idé till färdig plan."
        />
        <Card
          className="services-card"
          imgUrl={pottedPlant}
          title="Planteringsplaner"
          description="Växtförslag som passar din plats och dina önskemål"
        />
        <Card
          className="services-card"
          imgUrl={questionMark}
          title="Konsultation"
          description="Tips och vägledning för att utveckla din trädgård."
        />
        <Card
          className="services-card"
          imgUrl={wateringCan}
          title="Skötselråd"
          description="Skötselråd för att få din trädgård att blomstra."
        />
      </div>
    </section>
  );
}

export default Services;
