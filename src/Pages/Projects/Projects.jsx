import React from 'react';
import projectsData from '../../data/projectsData';
import ProjectCard from '../../components/projectCardComponent/ProjectCard';

const Projects = () => {
  return (
    <div>
      <h1>Meus Projetos</h1>
      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
