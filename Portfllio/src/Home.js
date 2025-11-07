import React, { useEffect, useState } from "react";
import "./Home.css";
import profilePic from "./assets/profile.jpg";
import { href } from "react-router-dom";

const Home = () => {
  const words = ["HTML", "CSS", "JavaScript", "React", "Responsive Design"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Mian Abdulah</span>
        </h1>
        <h2>Front-End Developer | Creative Thinker | Problem Solver</h2>
        <p>
          I specialize in building modern, fast, and interactive web interfaces using
          HTML5, CSS3, and JavaScript — with a focus on detail, performance, and user delight.
        </p>

        {/* ✨ Animated Web Development Text */}
        <div className="animated-text">
          <span className="text-line">I work with</span>
          <span className="changing-word">{words[index]}</span>
          <div className="underline-animation"></div>
        </div>

        <div className="home-buttons">
          <a href="./Projects" className="btn primary-btn">
            View Projects
          </a>
          <a href="./ContactUs" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
