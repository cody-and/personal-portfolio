import React from "react";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import { Home, Portfolio, Resume, PageNotFound, Contact, Education, TechStack } from "./pages";
import { Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <h1 className="main-text">Cody Anderson</h1>
          </Navbar.Brand>
        </Navbar>
      </header>
      <div className="content-container">
        <BrowserRouter>
          <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="home">
            <div className="mb-3 custom-tabs">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" eventKey="home">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/education" eventKey="education">
                    Education
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/tech-stack" eventKey="tech-stack">
                    Tech Stack
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/portfolio" eventKey="portfolio">
                    Portfolio
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/resume" eventKey="resume">
                    Resume
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact" eventKey="contact">
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="education" element={<Education />} />
                <Route path="tech-stack" element={<TechStack />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} /> 
              </Route>
            </Routes>
          </Tab.Container>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
