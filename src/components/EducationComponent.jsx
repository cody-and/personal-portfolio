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
            <p>During my enrollment in the Business Management program, I honed my skills for potential employment across a wide array of business sectors or for launching my own venture. My career prospects encompassed hospitality, sales, technology, retail, manufacturing, and financial services. Throughout my tenure at Northwood Tech, I mastered the art of devising and executing business strategies. Furthermore, I had the flexibility to specialize in either general business or marketing. The program also afforded me invaluable hands-on experience through field study opportunities in authentic business environments.</p>
          </div>
        </div>
        <div className="education-card">
          <img src={umnLogo} alt="University of Minnesota" className="card-image" />
          <div className="card-text">
            <h2>University of Minnesota</h2>
            <h4>Full Stack Coding Bootcamp</h4>
            <p>In the University of Minnesota Full Stack Coding Bootcamp, I gained comprehensive web development skills. The program covered front-end and back-end technologies, databases, and application development, focusing on JavaScript, HTML, and CSS. With experienced instructors and real-world projects, I honed my coding abilities, teamwork, and problem-solving skills. The program's emphasis on industry-relevant tools prepared me for a successful career in web development, supported by a portfolio of practical projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
