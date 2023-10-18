import React from "react";
import "./Footer1.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLocationArrow, FaMailBulk, FaPhone, FaSearchLocation } from "react-icons/fa";

function Footer1() {
  return (
    <div className="main">
      <div className="contact-container">
        <div className="contact">
          <h3>Contact Us</h3>
          <a href="nitsmun.com">
            <p>Nitsmun.com</p>
          </a>
          <a href="/nitsmun@gmail.com">
            <p>nitsmun@gmail.com</p>
          </a>
          <a href="/8689890900">
            <p>8989009000</p>
          </a>
        </div>

        <div className="explore">
          <h3>Explore</h3>
          <a href="/Home">
            <p>Home</p>
          </a>
          <a href="/Events">
            <p>Events</p>
          </a>
          <a href="/Team">
            <p>Team</p>
          </a>
          <a href="/About">
            <p>About</p>
          </a>
          <a href="/Segments">
            <p>Segments</p>
          </a>
        </div>
        <div className="logo">
          <img src="../../../public/nitsmun.png" alt="mun.logo" />

            <p className="nits">NITS</p>
            <br></br>
            <p className="mun">MUN</p>
        </div>
      </div>

      <div className="footer">
        <hr></hr>

        <div className="footer-container">
          <div className="footer-content">
            <p>Copyright @{new Date().getFullYear} All Rights Reserved by NITSMUN</p>
          </div>

          <div className="social-icons">
            <a
              href="https://www.YouTube.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FaYoutube />

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FaInstagram />

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <FaFacebook />

            <a href="https://www.linkedIn" target="_blank" rel="noopener noreferrer"></a>
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
