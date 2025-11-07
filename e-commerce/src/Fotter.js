import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#929292ff",
        padding: "12px 0",
        textAlign: "center",
        fontSize: "14px",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        &copy; {new Date().getFullYear()} EliteZone. All rights reserved.
      </Container>
    </footer>
  );
}

export default Footer;
