import React from "react";
import "./AboutUs.css";
import profilePic from "./assets/profile.jpg"; // apni image ka path likho

const AboutUs = () => {
  return (
    <section className="about" id="about">
      {/* About Card */}
      <div className="about-card">
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>

        <h1>
          About <span className="highlight">Me</span>
        </h1>

        <p>
          I'm a <b>Front-End Developer</b> passionate about creating modern,
          responsive, and visually appealing websites. With expertise in{" "}
          <b>HTML, CSS, JavaScript,</b> and <b>React</b>, I turn creative
          ideas into interactive user experiences.
        </p>

        <p>
          I love solving design and functionality challenges while maintaining
          clean and efficient code. My goal is to build digital experiences
          that look great and perform flawlessly across all devices.
        </p>

        <div className="about-details">
          <p>
            <strong>Name:</strong> Mian Abdulah
          </p>
          <p>
            <strong>Email:</strong> abdullahchaudary455@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Green City, Faisalabad, Pakistan
          </p>
        </div>

        <a href="./ContactUs" className="btn">
          Contact Me
        </a>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>

        <div className="education-item">
          <h3>Intermediate in Computer Science (ICS)</h3>
          <p>
            Superior Group of Colleges (Sargodha Road) — Faisalabad (2023 - 2024)
          </p>
        </div>

        <div className="education-item">
          <h3>Bachelor in Computer Science</h3>
          <p>
            Superior Group of Colleges (Affiliated From Gomal University) — Faisalabad (2024 - 2028)
          </p>
          <p>To be continued...</p>
        </div>

        <div className="education-item">
          <h3>Frontend Development (Certification)</h3>
          <p>Online Course — HTML, CSS, JavaScript, React (2025 - Present)</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="education-section">
        <h2>Experience</h2>

        <div className="education-item">
          <h3>JavaScript Fullstack</h3>
          <h3>(1 Year experience)</h3>
          <p>
            Softbeans tecnologies Lahore,Pakistan.
          </p>
          <p>
            Worked on multiple web development projects using React, HTML, CSS, and JavaScript, 
            delivering responsive and optimized user interfaces.
          </p>
        </div>

        <div className="education-item">
          <h3>Textile and Graphic designing</h3>
          <h3>(1 Year Experience)</h3>
          <p>
            Govt Instiute of Textile Tecnology — Milat Town,Faisalabad 
          </p>
          <p>
           Designed creative brand identities including logos, posters, and digital ads for multiple clients.
           Worked on social media campaigns using tools like Adobe Photoshop, Illustrator, and Canva.
          </p>
        </div>

        <div className="education-item">
          <h3>Personal Projects</h3>
          <p>
            Developed multiple portfolio and business websites using React. 
            Specialized in responsive layouts and interactive UI elements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
