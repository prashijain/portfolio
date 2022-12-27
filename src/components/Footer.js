import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter , FaGithub ,FaHackerrank } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lalitpur</p>
              <p>Uttar Pradesh , India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (+91) 9165848568
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jainprashii97@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>
                About The company
            </h4>
            <p>
                This is me Prashi Jain. CEO & Founder of Tech2etc. 
                I enjoy discussing new peojects and design challenges
            </p>
            <div className="social">
            <a href = "https://www.facebook.com/prashi.jain.9822" > <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }  }
              />  </a>
              <a href = "https://www.linkedin.com/in/prashi-jain-2391111a5/" > <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> </a>
             <a href = "https://github.com/prashijain" >  <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> </a>
             <a href = "https://www.hackerrank.com/jainprashii" >  <FaHackerrank
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> </a>
             <a href="https://leetcode.com/JAINPRASHI/">
              <SiLeetcode
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;