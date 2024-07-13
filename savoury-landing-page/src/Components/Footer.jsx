import React from "react";
import Logo from "../Images/logo6.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="footer-section-one">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="footer-icons">
            <BsTwitter className="icon" />
            <SiLinkedin className="icon" />
            <BsYoutube className="icon" />
            <FaFacebookF className="icon" />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Home</span>
            <span>About</span>
            <span>Menu</span>
            <span>Testimonial</span>
            <span>Blogs</span>
            <span>Contact</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
          </div>
          <div className="footer-section-columns">
            <span className="term">
              <p>Terms &</p>
              <p>Conditions</p>
            </span>
            <span>
              <p>Privacy</p>
              <p>Policy</p>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Food Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
