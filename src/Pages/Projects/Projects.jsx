import React from 'react';
import ProjectCard from '../../components/ProjectCardComponent/ProjectCard';
import NavBar from '../../components/NavBarComponent/NavBar';
import projectsData from '../../data/projectsData'; 

function Projects() {
  return (
    <div>
      <NavBar pageTitle="Meus Projetos" /> 
      <div className="card-container">
        {projectsData.map(project => ( 
          <ProjectCard key={project.id} project={project} /> 
        ))}
      </div>
    </div>
  );
}

export default Projects;
