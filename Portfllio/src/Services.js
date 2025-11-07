import React from "react";
import "./Services.css";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaPalette,
  FaShoppingCart,
  FaLayerGroup,
} from "react-icons/fa";

// 👇 Import team images (add these in your src/assets folder)
import team1 from "./assets/team1.jpg";
import team2 from "./assets/team2.jpg";
import team3 from "./assets/team3.jpg";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h1 className="services-title">
          Our <span className="highlight">Services</span>
        </h1>
        <p className="services-subtitle">
          I provide high-quality web and design solutions that combine creativity, clean
          code, and responsive design.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Front-End Development</h3>
            <p>
              Expert in building responsive, user-friendly websites using HTML,
              CSS, JavaScript, and React.
            </p>
          </div>

          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>UI / UX Design</h3>
            <p>
              Creating visually appealing interfaces with a focus on user
              experience and modern design trends.
            </p>
          </div>

          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Responsive Design</h3>
            <p>
              Ensuring smooth performance and perfect visuals across all
              devices — from desktop to mobile.
            </p>
          </div>

          <div className="service-card">
            <FaPalette className="service-icon" />
            <h3>Graphic Designing</h3>
            <p>
              Designing creative visuals, logos, banners, and brand materials
              using modern tools like Photoshop and Illustrator.
            </p>
          </div>

          <div className="service-card">
            <FaShoppingCart className="service-icon" />
            <h3>E-Commerce Development</h3>
            <p>
              Building modern, secure, and user-friendly online stores with
              smooth product management and checkout experiences.
            </p>
          </div>

          <div className="service-card">
            <FaLayerGroup className="service-icon" />
            <h3>Textile Designing</h3>
            <p>
              Crafting innovative textile patterns, fabric designs, and print
              layouts with a blend of creativity and industry trends.
            </p>
          </div>
        </div>

        {/* 👇 Our Team Section */}
        <div className="team-section">
          <h1 className="services-title">
            Our <span className="highlight">Team</span>
          </h1>
          <p className="services-subtitle">
            Meet the creative minds who bring ideas to life with skill,
            dedication, and innovation.
          </p>

          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-card">
              <img src={team1} alt="Team Member 1" className="team-img" />
              <h3>Ch Abdullah</h3>
              <p>Front-End Developer</p>
            </div>

            {/* Team Member 2 */}
            <div className="team-card">
              <img src={team2} alt="Team Member 2" className="team-img" />
              <h3>Mian Ahmad</h3>
              <p>Lead UI/UX Designer</p>
            </div>

            {/* Team Member 3 */}
            <div className="team-card">
              <img src={team3} alt="Team Member 3" className="team-img" />
              <h3>Malik Hassan</h3>
              <p>Textile & Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
