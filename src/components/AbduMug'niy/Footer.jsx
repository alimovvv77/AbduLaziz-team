import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-text">Ready to get started?</h2>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-links-container">
        <div className="footer-subscribe">
          <h3>Subscribe to our Website</h3>
          <div className="input-group">
            <input type="email" placeholder="Email address" />
            <button className="arrow-btn">›</button>
          </div>
        </div>

        <div className="links-group">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="legal">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;