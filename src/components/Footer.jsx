import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>&copy; {new Date().getFullYear()} Cody Anderson. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/cody-and" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/cody-anderson-960782227/" target="_blank">LinkedIn</a>
          <a href="" target="_blank">Link 3</a>
        </div>
      </Container>
    </footer>
  );
}