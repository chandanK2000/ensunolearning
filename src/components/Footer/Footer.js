// Footer.js
import React from "react";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {

  const Subscribed=()=>{
    alert("Sucbscribed Successfully");
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h3>We’d love to have you join us!</h3>
          </div>
          <div className="footer-section">
            <form>
              <input
                type="email"
                placeholder="Email"
                className="email-input"
              />
              <button type="submit" className="subscribe-button" onClick={Subscribed}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-section">
            <img src='/logo.webp' alt="Ensueno Learning" className="navbar-logo" height="40px" width="130px" />
          </div>
          <div className="footer-section follow-us-section">
            <p className="follow-us">Follow Us</p>
            <div className="social-icons">
              <FaWhatsapp className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaFacebook className="social-icon" />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-container">
          <div className="footer-section">
            <h5>Ensueno For</h5>
            <p>Students</p>
            <p>Institution</p>
            <p>Corporates</p>
            
          </div>
          <div className="footer-section">
            <h5>Build For</h5>
            <p>Students</p>
            <p>Universities</p>
            <p>Corporates</p>
          </div>
          <div className="footer-section">
            <h5>Solution</h5>
            <p>Training</p>
            <p>Skills</p>
          </div> <div className="footer-section">
            <h5>Company</h5>
            <p>Pricing</p>
            <p>Learning</p>
            <p>Careers</p>
            <p>About</p>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-section">
            <h5>Contact Us</h5>
            <p><FaPhone /> +123456789</p>
          </div>
          <div className="footer-section">
            <h5>Email</h5>
            <p><FaEnvelope /> info@example.com</p>
          </div>
          <div className="footer-section">
            <h5>Registered Office</h5>
            <p><FaMapMarkerAlt /> 126, The Summit Business Park, Andheri – Kurla Rd, Andheri East, Mumbai, Maharashtra 400093</p>
          </div>
        </div>
        <hr/>
        <div className="copyright">
          <p>Copyright 2022 X EnsuenoLearning.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
