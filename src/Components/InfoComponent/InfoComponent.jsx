import React from 'react';
import "./info.css";

function InfoComponent({ pageTitle }) {
  return (
    <div className='page-container-info'>
      <div className='info-container'>
        <h1>{pageTitle}</h1> 
        <section>
         <div className='foto-perfil'>
         <img src="/img/foto-perfil/foto-perfil.jpg" alt="Minha Foto" />
         </div>
         
        </section>
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>Tecnologias:</li>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>C#</li>
            <li>.NET</li>
            <li>SQL Server</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>Cloud Computing</li>
            <li>Clean Code</li>
            <li>Figma</li>
            <li>Metodologia Ágil</li>
          </ul>
        </ul>
        <section>
          <h2>Documentos</h2>
          <ul>
            <li><a href="/caminho/para/meu-curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a></li>
            <li><a href="/caminho/para/meu-certificado.pdf" target="_blank" rel="noopener noreferrer">Certificado de Curso Fullstack</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default InfoComponent;
