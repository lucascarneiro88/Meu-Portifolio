import React from 'react';
import './project-card.css';
import projectsData from '../../data/projectsData';

function ProjectCard({ project }) { 
  return (
    <div className='project-card-container'>
      <div className="image-container">
        <img src={project.image} alt={project.alt} />
      </div>
      <div className='card-content'>
        <h2>{project.title}</h2>
        <p id='description'>{project.description}</p>
        <div className="btn-container">
          <button className="btn">
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deploy</a>
          </button>
          <button className="btn">
            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
