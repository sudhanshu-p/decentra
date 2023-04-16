import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";
import logo from '@/All-Images/decentra-logo.png'

function Footer() {
  return (
    <div>
      <footer className="footer-sec">
        <div className="main">
          <div className="logo row">
            <div className="footer-header">
              <img src={logo} className="manik" alt="logo" />
            </div>
            <div className="logo-des">
              <p>
                Thank you for choosing Decentra.We aim to bridge the gap between recruiters and students and help every aspiring web3 learner.
              </p>

              {/* <a href="/" className="btn-know">Know More</a> */}

              <a href="">mail@gmail.com</a>

            </div>
          </div>

          <div className="office row">
            <div className="footer-header">
              <h3>Designed and Developed by </h3>
            </div>
            <div className="office-des">
              {/* <p>
                here are many variations of passages of Lorem Ipsum available{" "}
              </p> */}
              <div className="box">
                <div className="team-id">
                  <a href="https://www.linkedin.com/in/amit-mondal-78a450205/">
                    <h5>Amit Mondal</h5>
                  </a>
                </div>
                <div className="team-id">
                  <a href="https://www.linkedin.com/in/yash-wankhedkar-876496193/">
                    <h5>Yash Wankhedkar</h5>
                  </a>
                </div>
                <div className="team-id">
                  <a href="https://www.linkedin.com/in/varsha-valecha-8054bb244/">
                    <h5>Varsha Valecha</h5>
                  </a>
                </div>
                <div className="team-id">
                  <a href="https://www.linkedin.com/in/sudhanshu-p/">
                    <h5>Sudhanshu Pandey</h5>
                  </a>
                </div>
              </div>



              {/* <p class = "num">+91-9999999999</p> */}
            </div>
          </div>

          <div className="link-row">
            <div className="footer-header">
              <h3>Links</h3>
            </div>

            <div className="link-des">
              <a href="" className="footer-links">
                Home
              </a>
              <a href="" className="footer-links">
                About
              </a>
              <a href="" className="footer-links">
                Competitions
              </a>
              <a href="" className="footer-links">
                Galary
              </a>
              <a href="" className="footer-links">
                Contact Us
              </a>
            </div>
          </div>

          <div className="newsletter row">
            <div className="footer-header">
              <h3>Newsletter</h3>

            </div>
            <div className="newsletter-des">
              <div className="subcribe">
                <i className="sub-icon ri-mail-check-fill"></i>
                <input type="mail" placeholder="Enter Email ID" required />

                <i className="sub-icon ri-arrow-right-line"></i>
              </div>
              <div className="icons">
                <a href="/">
                  <i className="social-icon ri-facebook-fill"></i>
                </a>
                <a href="/">
                  <i className="social-icon ri-instagram-line"></i>
                </a>
                <a href="/">
                  <i className="social-icon ri-linkedin-fill"></i>
                </a>
                <a href="/">
                  <i className="social-icon ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />

          <p>© Copyright 2023 Decentra.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
