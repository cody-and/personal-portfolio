import React from 'react';

function Card({ svg, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="svg-container">
        <object type="image/svg+xml" data={svg} width="100" height="100">
          Your browser does not support SVG
        </object>
      </div>
    </div>
  );
}

export default Card;