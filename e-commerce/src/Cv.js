import React from "react";
import { Container, Row, Col, Image, Card, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Resume() {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "40px 0" }}>
      <Container>
        {/* Profile Picture Section */}
        <Row className="justify-content-center text-center mb-4">
          <Col md={3}>
            <Image
              src="https://via.placeholder.com/150"
              roundedCircle
              fluid
              style={{ border: "4px solid #007bff" }}
            />
            <h3 className="mt-3 mb-0">Mian Abdullah</h3>
            <p className="text-muted">Front-End Developer</p>
          </Col>
        </Row>

        <hr />

        {/* Contact Section */}
        <Row className="justify-content-center text-center mb-4">
          <Col md={6}>
            <h4>📞 Contact</h4>
            <p>Email: mianabdullah@email.com</p>
            <p>Phone: +92 300 1234567</p>
            <p>Location: Lahore, Pakistan</p>
          </Col>
        </Row>

        <hr />

        {/* Experience Section */}
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h4 className="text-center mb-3">💼 Experience</h4>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Front-End Developer - EliteZone</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">2023 - Present</Card.Subtitle>
                <Card.Text>
                  - Developed responsive websites using React and Bootstrap.  
                  - Improved UI/UX for e-commerce projects.  
                  - Collaborated with design and backend teams.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Web Designer - Creative Studio</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">2021 - 2023</Card.Subtitle>
                <Card.Text>
                  - Designed clean, modern layouts using Figma.  
                  - Converted designs into responsive code.  
                  - Enhanced performance and accessibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr />

        {/* Education Section */}
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h4 className="text-center mb-3">🎓 Education</h4>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>BS Computer Science</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">University of Lahore (2019 - 2023)</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr />

        {/* Skills Section */}
        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="text-center mb-3">🧠 Skills</h4>
            <div className="mb-2">
              <strong>React</strong>
              <ProgressBar now={90} label="90%" />
            </div>
            <div className="mb-2">
              <strong>HTML / CSS</strong>
              <ProgressBar now={95} label="95%" />
            </div>
            <div className="mb-2">
              <strong>JavaScript</strong>
              <ProgressBar now={85} label="85%" />
            </div>
            <div className="mb-2">
              <strong>Bootstrap</strong>
              <ProgressBar now={90} label="90%" />
            </div>
          </Col>
        </Row>

        <hr />

        {/* Footer */}
        <Row className="justify-content-center text-center mt-4">
          <Col md={6}>
            <p className="text-muted">© 2025 Mian Abdullah | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
