import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
// import "./AboutUs.css"; // custom CSS for hover effects

export default function AboutUs() {
  const brand = {
    name: "EliteZone",
    tagline: "Streetwear with comfort & confidence",
    founded: 2021,
    products: ["Track Suits", "Hoodies", "Shirts", "Shorts", "Loafers"],
  };

  const styles = {
    hero: { backgroundColor: "#e9ecef", padding: "3rem 1rem", borderRadius: 12 },
    logo: { width: 110, height: "auto", objectFit: "contain" },
    highlight: { color: "#0d6efd", fontWeight: 700 },
    stat: { fontSize: "1.5rem", fontWeight: 700, color: "#0d6efd" },
    card: { border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease" },
    sectionTitle: { color: "#212529", borderBottom: "2px solid #0d6efd", display: "inline-block", paddingBottom: 5 },
    pageHeading: { color: "#0d6efd", fontWeight: 700, marginBottom: "2rem", textAlign: "center" },
  };

  return (
    <Container className="my-5">
      {/* Top Page Heading */}
      <h1 style={styles.pageHeading}>About Us</h1>

      {/* Hero / Header */}
      <Card className="p-4 mb-4" style={styles.hero}>
        <Row className="align-items-center">
          <Col md={3} className="text-center mb-3 mb-md-0">
            <Image src="/assets/elitezone-logo.png.png" alt={`${brand.name} logo`} style={styles.logo} rounded />
          </Col>
          <Col md={9}>
            <h2 className="mb-1">About <span style={styles.highlight}>{brand.name}</span></h2>
            <p className="mb-2 text-muted">{brand.tagline}</p>
            <p className="mb-0">
              Founded in <strong>{brand.founded}</strong>, {brand.name} creates comfortable, stylish streetwear for
              people who value quality and confident design. From cozy hoodies to versatile loafers and trendy track
              suits — every product is designed with attention and care.
            </p>
          </Col>
        </Row>
      </Card>

      {/* Mission, Vision, Values */}
      <Row className="g-4 mb-4">
        <Col md={4}>
          <Card className="p-3 h-100 hover-card" style={styles.card}>
            <h5 style={{ color: "#0d6efd" }}>Our Mission</h5>
            <p className="text-muted small">To offer premium casual wear that blends comfort, trend, and durability so
            everyone can feel confident in their everyday look.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 h-100 hover-card" style={styles.card}>
            <h5 style={{ color: "#0d6efd" }}>Our Vision</h5>
            <p className="text-muted small">To become the go-to brand for modern streetwear and to grow
            responsibly while keeping quality first.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 h-100 hover-card" style={styles.card}>
            <h5 style={{ color: "#0d6efd" }}>Our Values</h5>
            <ul className="mb-0 small text-muted">
              <li>Quality materials</li>
              <li>Thoughtful design</li>
              <li>Customer first</li>
              <li>Sustainable growth</li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Product Highlights */}
      <h4 className="mb-3" style={styles.sectionTitle}>Our Products</h4>
      <Row className="g-3 mb-4">
        {brand.products.map((p) => (
          <Col key={p} xs={6} md={3}>
            <Card className="text-center p-3 h-100 hover-card" style={styles.card}>
              <Image src={`/assets/${p.toLowerCase().replace(/ /g, "-")}.jpg`} alt={p} thumbnail />
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "1rem", color: "#0d6efd" }}>{p}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Stats */}
      <Row className="align-items-center g-4">
        <Col md={12}>
          <Card className="p-4 h-100 text-center hover-card" style={styles.card}>
            <Row>
              <Col xs={4} className="text-center">
                <div style={styles.stat}>10k+</div>
                <div className="text-muted small">Happy Customers</div>
              </Col>
              <Col xs={4} className="text-center">
                <div style={styles.stat}>50+</div>
                <div className="text-muted small">Designs</div>
              </Col>
              <Col xs={4} className="text-center">
                <div style={styles.stat}>4.8/5</div>
                <div className="text-muted small">Avg Rating</div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
