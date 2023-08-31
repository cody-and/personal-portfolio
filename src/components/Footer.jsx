import React from "react";
import Container from "react-bootstrap/Container";
import gitHubLogo from "../assets/Footer-Logos/github.svg";
import linkedInLogo from "../assets/Footer-Logos/linkedin.svg";
import stackOverflowLogo from "../assets/Footer-Logos/stack-overflow.svg";
import '../App.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p className="secondary-text">&copy; {new Date().getFullYear()} Cody Anderson. All rights reserved.</p>
        <div className="footer-links d-flex justify-content-center">
          <a href="https://github.com/cody-and" target="_blank" className="mx-3">
            <img src={gitHubLogo} alt="GitHub" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/cody-anderson-960782227/" target="_blank" className="mx-3">
            <img src={linkedInLogo} alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://stackoverflow.com/users/1234567" target="_blank" className="mx-3">
            <img src={stackOverflowLogo} alt="Stack Overflow" className="footer-icon" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
