import React from 'react';
import '../App.css';
import Card from './TechCards'; 
import svgFile1 from '../assets/Tech-Stack-Logos/bootstrap.svg';
import svgFile2 from '../assets/Tech-Stack-Logos/css.svg';
import svgFile3 from '../assets/Tech-Stack-Logos/handlebars.svg';
import svgFile4 from '../assets/Tech-Stack-Logos/html5.svg';
import svgFile5 from '../assets/Tech-Stack-Logos/javascript.svg';
import svgFile6 from '../assets/Tech-Stack-Logos/markdown.svg';
import svgFile7 from '../assets/Tech-Stack-Logos/mongodb.svg';
import svgFile8 from '../assets/Tech-Stack-Logos/mysql.svg';
import svgFile9 from '../assets/Tech-Stack-Logos/node-js.svg';
import svgFile10 from '../assets/Tech-Stack-Logos/react.svg';
import svgFile11 from '../assets/Tech-Stack-Logos/sequelize.svg';

const svgFiles = [
  { svg: svgFile1, title: 'Bootstrap' },
  { svg: svgFile2, title: 'CSS' },
  { svg: svgFile3, title: 'Handlebars' },
  { svg: svgFile4, title: 'HTML5' },
  { svg: svgFile5, title: 'JavaScript' },
  { svg: svgFile6, title: 'Markdown' },
  { svg: svgFile7, title: 'MongoDB' },
  { svg: svgFile8, title: 'MySQL' },
  { svg: svgFile9, title: 'Node.js' },
  { svg: svgFile10, title: 'React' },
  { svg: svgFile11, title: 'Sequelize' },
];

export default function TechSkills() {
  return (
    <div className="tech-skills-container">
      <h2 className="tech-skills-title">Tech Stack</h2>
      <div className="cards-container">
        {svgFiles.map((item, index) => (
          <Card key={index} svg={item.svg} title={item.title} />
        ))}
      </div>
    </div>
  );
}
