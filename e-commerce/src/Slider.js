import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css"; // custom CSS

// Images ko src/assets/ ke andar rakho
import slide1 from "./assets/ecom1.jpg";
import slide2 from "./assets/ecom2.jpg";
import slide3 from "./assets/ecom3.jpg";

function EcommerceCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel data-bs-theme="dark" interval={3000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="carousel-heading">Mega Sale</h3>
            <p className="carousel-text">
              Grab the best deals on electronics & fashion.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="carousel-heading">New Arrivals</h3>
            <p className="carousel-text">
              Explore the latest trends in clothing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="carousel-heading">Shop Smart</h3>
            <p className="carousel-text">
              Easy shopping experience with fast delivery.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default EcommerceCarousel;
