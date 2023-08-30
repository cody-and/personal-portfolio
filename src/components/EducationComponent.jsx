import React from 'react';
import northwoodLogo from '../assets/Education-Pictures/northwood_Logo-lg.png';
import umnLogo from '../assets/Education-Pictures/University-of-Minnesota-Logo.png';
import '../App.css';

export default function EducationComponent() {
  return (
    <div className="education-container">
      <div className="education-cards">
        <div className="education-card">
          <img src={northwoodLogo} alt="Northwood University" className="card-image" />
          <div className="card-text">
            <h2>Northwood Tech</h2>
            <h4>Business Management</h4>
            <p>Some description or details about Northwood University.</p>
          </div>
        </div>
        <div className="education-card">
          <img src={umnLogo} alt="University of Minnesota" className="card-image" />
          <div className="card-text">
            <h2>University of Minnesota</h2>
            <h4>Full Stack Coding Bootcamp</h4>
            <p>Some description or details about University of Minnesota.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
