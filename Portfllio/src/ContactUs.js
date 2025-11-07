import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1>
          Contact <span className="highlight">Me</span>
        </h1>
        <p className="contact-intro">
          Have a project in mind or just want to say hello?  
          I'd love to hear from you. Let’s connect!
        </p>

        <div className="contact-content">
          {/* Left side info */}
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>abdullahchaudary455@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+92 308 3456789</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Green City, Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
