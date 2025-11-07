import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // custom CSS
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // 👈 add this import

function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo-text">
            Elitezon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/AboutUs">About</Nav.Link>
              <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
