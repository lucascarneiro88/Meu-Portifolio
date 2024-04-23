import React from "react";
import "./modal.css";

function ModalProject({ isOpen, setModalOpen, additionalInfo }) {
  if (!isOpen || !additionalInfo) {
    return null;
  }

  const { date, author, bibliotecas, tecnologias } = additionalInfo;

  return (
    <div className="backgroud-modal">
      <div className="modal-style">
        <div>
          <p>Data: {date}</p>
          <p>Autor: {author}</p>
          <p>bibliotecas: {bibliotecas}</p>
          <p>tecnologias: {tecnologias}</p>
        </div>
        <button onClick={setModalOpen}>x</button>
      </div>
    </div>
  );
}

export default ModalProject;
