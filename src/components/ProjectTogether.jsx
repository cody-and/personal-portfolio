import React from 'react';
import Project from './Project';
import svgFile1 from '../assets/Footer-Logos/github.svg';
import '../App.css';

const projectCards = [
  { svg: svgFile1, projectLink: 'https://cody-and.github.io/password-generator-03/', svgLink: 'https://github.com/cody-and/password-generator-03', title: ' Random Password Generator' },
  { svg: svgFile1, projectLink: 'https://streamable.com/bfm1k7', svgLink: 'https://github.com/cody-and/ORM-E-Commerce-Back-End', title: 'ORM E-Commerce Back End' },
  { svg: svgFile1, projectLink: 'https://cody-and.github.io/5-Day-Weather-Forecast/', svgLink: 'https://github.com/cody-and/5-Day-Weather-Forecast', title: ' 5 Day Weather Forecast' },
  { svg: svgFile1, projectLink: 'https://streamable.com/wfxrbn', svgLink: 'https://github.com/cody-and/svg-logo-maker', title: 'SVG Logo Maker' },
  { svg: svgFile1, projectLink: 'https://mocha-matcha.github.io/group-project1/', svgLink: 'https://github.com/mocha-matcha/group-project1', title: 'DeezerDen' },
];

export default function ProjectTogether() {
  return (
    <div className="project-together-container">
      <h2 className="project-together-title">Projects</h2>
      <div className="project-cards-container">
        {projectCards.map((item, index) => (
          <Project
            key={index}
            svg={item.svg}
            projectLink={item.projectLink}
            svgLink={item.svgLink}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
