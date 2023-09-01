import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Portfolio, Resume, PageNotFound, Contact, Education, TechStack } from "./pages";
import { About, Project, Footer, TechSkills, EducationComponent } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap"; 
import Navbar from "react-bootstrap/Navbar";
import "./App.css"; 


function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="/">
            <h1 className="main-text">Cody Anderson</h1>
          </Navbar.Brand>
        </Navbar>
      </header>
      <div className="content-container">
        <BrowserRouter>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 custom-tabs">
            <Tab eventKey="home" title="Home">
              <Home />
            </Tab>
            <Tab eventKey="education" title="Education">
              <Education />
            </Tab>
            <Tab eventKey="tech-stack" title="Tech Stack">
              <TechStack />
            </Tab>
            <Tab eventKey="portfolio" title="Portfolio">
              <Portfolio />
            </Tab>
            <Tab eventKey="resume" title="Resume">
              <Resume />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Contact />
            </Tab>
          </Tabs>
        </BrowserRouter>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
