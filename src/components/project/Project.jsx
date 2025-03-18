import React from "react";
import './project.css'
function Project({ image, information, link , title }) {
  return (
    <div className="project-card">
      <h1 className="project-title">{title}</h1>
      <img className="project-image" src={image} alt="Project Preview" />
      <p className="project-information">{information}</p>
      <button className="project-button">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </button>
    </div>
  );
}

export default Project;
