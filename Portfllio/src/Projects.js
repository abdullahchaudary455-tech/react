import React from "react";
import "./Projects.css";

// 👇 Import your project screenshots here
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/CV.jpg"
import project4 from "./assets/Calculater.jpg";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1 className="projects-title">
          My <span className="highlight">Projects</span>
        </h1>
        <p className="projects-subtitle">
          Here are some of my recent works that showcase my creativity and
          technical skills in web and design development.
        </p>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img src={project1} alt="Project 1" className="project-img" />
            <h3>Sample Website</h3>
            <p>
              <strong>Create Sample Websites for practice with the help Of Chatgpt.</strong> 
            </p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src={project2} alt="Project 2" className="project-img" />
            <h3>E-Commerce Website</h3>
            <p>
              <strong>A modern, responsive e-commerce site featuring smooth navigation,
              product management, and checkout functionality.</strong>
            </p>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src={project3} alt="Project 3" className="project-img" />
            <h3>Cv Resume</h3>
            <p>
              <strong>Make CV Resume Using HTML5 and CSS3.</strong> 
            </p>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <img src={project4} alt="Project 4" className="project-img" />
            <h2>Calculater</h2>
            <p>
              <strong>Create aa calculater using JavaScript.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
