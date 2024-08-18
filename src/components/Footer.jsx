import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ritik Sonwani</h4>
      <h4>Copyright &copy; 2023 RS</h4>
      <div className="footer-links">
        <a
          href="https://github.com/Ritik26052000"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ritik-sonwani-son/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:anshusonwani2605@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-email"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
