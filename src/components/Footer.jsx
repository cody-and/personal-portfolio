import React from "react";
import Container from "react-bootstrap/Container";
import gitHubLogo from "../assets/Footer-Logos/github.svg";
import linkedInLogo from "../assets/Footer-Logos/linkedin.svg";
import * as FaIcons from 'react-icons/fa6';

import '../App.css';

export default function Footer() {
  return (
<footer className="footer bg-dark text-white text-center py-3">
  <Container>
    <p className="secondary-text">&copy; {new Date().getFullYear()} Cody Anderson. All rights reserved.</p>
    <div className="footer-links d-flex justify-content-center">
      <a href="https://github.com/cody-and" target="_blank" rel="noopener noreferrer"><FaIcons.FaGithub className="footer-icon" /></a>
      <a href="https://www.linkedin.com/in/cody-anderson-960782227/" target="_blank" rel="noopener noreferrer"><FaIcons.FaLinkedin className="footer-icon" /></a>
      <a href="mailto:codya.0807@gmail.com"><FaIcons.FaEnvelope className="footer-icon" /></a>
    </div>
  </Container>
</footer>
  );
}
