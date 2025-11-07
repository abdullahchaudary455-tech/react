import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa"; // 🛒 icon import
import "./Card.css"; // custom CSS for hover animation

// Local images import
import card1 from "./assets/card1.jpg";
import card2 from "./assets/card2.jpg";
import card3 from "./assets/card3.jpg";
import card4 from "./assets/card4.jpg";

function CardsSection() {
  return (
    <Container className="mt-4">
      {/* Heading */}
      <h2 className="text-center mb-4 fw-bold text-primary">Our Products</h2>

      <Row className="g-4">
        {[ 
          {
            img: card1,
            title: "TrackSuit",
            desc: "Stylish 2-piece casual outfit with a trendy white printed T-shirt and black jogger trousers. Perfect for a cool and modern streetwear look.",
          },
          {
            img: card2,
            title: "Hoodies",
            desc: "Trendy black hoodie with stylish text print “Simple Things” and bold design. Soft, warm, and perfect for casual streetwear.",
          },
          {
            img: card3,
            title: "Loafers",
            desc: "Formal slip-on penny loafers with a sleek design. Ideal for office wear or semi-formal gatherings.",
          },
          {
            img: card4,
            title: "Shorts",
            desc: "Casual men's short set designed for comfort and style. Perfect for summer outings or gym sessions.",
          },
        ].map((item, index) => (
          <Col md={3} sm={6} key={index}>
            <Card className="shadow-sm h-100 card-hover">
              <div className="card-img-wrapper">
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="card-img-fixed"
                />
              </div>
              <Card.Body className="text-center d-flex flex-column">
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button variant="primary" className="mt-auto cart-btn">
                  <FaShoppingCart className="me-2" /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsSection;
