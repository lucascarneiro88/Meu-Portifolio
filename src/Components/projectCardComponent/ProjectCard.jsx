import React from 'react';
import './project-card.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.alt} /> 
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="buttons">
        <button className="deploy-button">
          <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deploy</a>
        </button>
        <button className="github-button">
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub</a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
