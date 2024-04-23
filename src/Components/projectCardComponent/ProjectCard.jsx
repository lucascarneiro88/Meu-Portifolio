import React, { useState } from "react";
import "./project-card.css";
import ModalProject from "../ModalProjectComponent/ModalProject";

function ProjectCard({ project }) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="page-container">
      {openModal && (
        <ModalProject
          isOpen={openModal}
          setModalOpen={handleModalClose}
          project={project}
          additionalInfo={project.additionalInfo}
        ></ModalProject>
      )}

      <div className="project-card-container">
        <div className="image-container">
          <img src={project.image} alt={project.alt} />
        </div>
        <div className="card-content">
          <h2>{project.title}</h2>
          <p id="description">{project.description}</p>
          <div className="stacks-container">
            {project.stacks &&
              Array.isArray(project.stacks) &&
              project.stacks.map((stack, index) => (
                <img key={index} src={stack} alt="Logo da tecnologia" />
              ))}
          </div>
          <div className="btn-container">
            <button className="btn">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </button>
            <button className="btn">
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>

          <button onClick={handleModalOpen}>Ver mais</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
