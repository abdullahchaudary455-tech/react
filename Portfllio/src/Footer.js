import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>Mian Abdulah</h2>
          <p>Front-End Developer | Creative Thinker | Web Designer</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Follow Me</h3>
          <div className="footer-icons">
            {/* 👉 Replace these links with your actual profile URLs */}
            <a
              href="https://www.tiktok.com/@abdulah_451a"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/@abdullah_451a"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/923086186046"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          {/* <h3>Contact</h3> */}
          <p><strong>Contact No:</strong> +923086186046</p>
          <p><strong>Email:</strong> abdullahchaudary455@gmail.com</p>
          <p><strong>Location:</strong> Green City, Faisalabad, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mian Abdulah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
