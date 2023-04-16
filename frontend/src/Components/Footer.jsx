import React from "react";
import { NavLink } from "react-router-dom";

import "../CSS/Footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer-sec">
        <div class="main">
          <div class="logo row">
            <div class="footer-header">
              <img src={"./All-Images/decentra-logo.png"} class="manik" alt="logo" />
            </div>
            <div class="logo-des">
              <p>
                Thank you for choosing Decentra.We aim to bridge the gap between recruiters and students and help every aspiring web3 learner.
              </p>

              {/* <a href="/" class="btn-know">Know More</a> */}

              <a href="">mail@gmail.com</a>

            </div>
          </div>

          <div class="office row">
            <div class="footer-header">
              <h3>Designed and Developed by </h3>
            </div>
            <div class="office-des">
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

          <div class="link-row">
            <div class="footer-header">
              <h3>Links</h3>
            </div>

            <div class="link-des">
              <a href="" class="footer-links">
                Home
              </a>
              <a href="" class="footer-links">
                About
              </a>
              <a href="" class="footer-links">
                Competitions
              </a>
              <a href="" class="footer-links">
                Galary
              </a>
              <a href="" class="footer-links">
                Contact Us
              </a>
            </div>
          </div>

          <div class="newsletter row">
            <div class="footer-header">
              <h3>Newsletter</h3>

            </div>
            <div class="newsletter-des">
              <div class="subcribe">
                <i class="sub-icon ri-mail-check-fill"></i>
                <input type="mail" placeholder="Enter Email ID" required />

                <i class="sub-icon ri-arrow-right-line"></i>
              </div>
              <div class="icons">
                <a href="/">
                  <i class="social-icon ri-facebook-fill"></i>
                </a>
                <a href="/">
                  <i class="social-icon ri-instagram-line"></i>
                </a>
                <a href="/">
                  <i class="social-icon ri-linkedin-fill"></i>
                </a>
                <a href="/">
                  <i class="social-icon ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <hr />

          <p>© Copyright 2023 Decentra.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
