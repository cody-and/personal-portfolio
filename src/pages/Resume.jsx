import React from 'react';
import MyPDF from '../assets/Resume/UpdatedResume.pdf';
import '../App.css'

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <iframe
        src={MyPDF}
        title="PDF Viewer"
        className="pdf-iframe" 
      ></iframe>
    </div>
  );
}