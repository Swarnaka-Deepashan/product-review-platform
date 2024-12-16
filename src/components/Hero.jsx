import Carousel from "react-bootstrap/Carousel";
import { heroData } from "../constants";



export default function Hero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={"slide " + hero.id}
            />
            <Carousel.Caption>
              <h2>{hero.title}</h2>
              <p><em>{hero.description}</em></p>
              <a className="btn btn-primary" href={hero.link}>
                Explore Reviews <i className="fas fa-chevron-right"></i>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
