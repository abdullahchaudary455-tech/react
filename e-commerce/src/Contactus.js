import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", address: "", message: "" });
  };

  const styles = {
    container: {
      background: "linear-gradient(to bottom right, #f8f9fa, #e9f2ff)",
      padding: "3rem 1rem",
      borderRadius: "20px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
    card: {
      padding: "2rem",
      borderRadius: "20px",
      border: "none",
      boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    heading: {
      color: "#0d6efd",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    button: {
      background: "linear-gradient(90deg, #0d6efd, #007bff)",
      border: "none",
      borderRadius: "30px",
      padding: "10px 0",
      fontWeight: "600",
      letterSpacing: "0.5px",
    },
    icon: { color: "#0d6efd", marginRight: "10px", fontSize: "1.2rem" },
    socialIcon: {
      color: "#0d6efd",
      fontSize: "1.8rem",
      marginRight: "18px",
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    map: {
      width: "100%",
      height: "200px",
      borderRadius: "15px",
      border: "none",
      marginTop: "1rem",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
  };

  return (
    <Container className="my-5" style={styles.container}>
      <Row className="justify-content-center align-items-stretch g-4">
        {/* Left Div - Personal Info Form (Wider) */}
        <Col md={7} className="d-flex">
          <Card style={styles.card}>
            <div>
              <h2 style={styles.heading}>Personal Information</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Changed Subject to Address */}
                <Form.Group className="mb-3" controlId="contactAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button type="submit" style={styles.button} className="w-100">
                  Send Message
                </Button>
              </Form>
            </div>
          </Card>
        </Col>

        {/* Right Div - My Contact Details (Slightly Narrower) */}
        <Col md={5} className="d-flex">
          <Card style={styles.card}>
            <div>
              <h2 style={styles.heading}>My Contact Details</h2>
              <p>
                <FaMapMarkerAlt style={styles.icon} /> Green City, Millat Road,
                Faisalabad, Pakistan
              </p>
              <p>
                <FaPhoneAlt style={styles.icon} /> +92 308 6186046
              </p>
              <p>
                <FaEnvelope style={styles.icon} /> abdullahchaudary455@gmail.com
              </p>

              <hr />
              <h5 style={{ color: "#0d6efd", marginTop: "1rem" }}>Follow Me</h5>
              <div style={{ fontSize: "1.5rem" }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.socialIcon}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.socialIcon}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.socialIcon}
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://wa.me/923086186046"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.socialIcon}
                >
                  <FaWhatsapp />
                </a>
              </div>

              <hr />
              <p style={{ marginTop: "1rem", color: "#555" }}>
                I’d love to hear from you! Whether you have a question, want to
                collaborate, or just want to say hi — my inbox is always open.
              </p>
            </div>

            {/* Google Map */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27208.833859007584!2d73.041108!3d31.418689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242d52e410b7d%3A0x8cdd5ef13c69fdd5!2sMillat%20Road%2C%20Faisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696850020014!5m2!1sen!2s"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
