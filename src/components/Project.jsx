import React from 'react';

function Project({ svg, projectLink, svgLink, title }) {
  return (
    <div className="project-card">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
      </a>
      <div className="svg-container">
        <a href={svgLink} target="_blank" rel="noopener noreferrer">
          <img src={svg} alt="SVG" className="project-svg" />
        </a>
      </div>
    </div>
  );
}

export default Project;
