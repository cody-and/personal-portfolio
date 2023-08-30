import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Portfolio, Resume, PageNotFound, Contact, Education, TechStack } from "./pages";
import { About, Project, Footer, TechSkills, EducationComponent, } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">
              <h1>Cody Anderson</h1>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">
                <h3>About</h3>
              </Nav.Link>
              <Nav.Link href="/education">
                <h3>Education</h3>
              </Nav.Link>
              <Nav.Link href="/tech-stack">
                <h3>Tech Stack</h3>
              </Nav.Link>
              <Nav.Link href="/portfolio">
                <h3>Portfolio</h3>
              </Nav.Link>
              <Nav.Link href="/resume">
                <h3>Resume</h3>
              </Nav.Link>
              <Nav.Link href="/contact">
                <h3>Contact</h3>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div className="content-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </div>

     <div>
      <Footer />
     </div>
    </div>
  );
}

export default App;
