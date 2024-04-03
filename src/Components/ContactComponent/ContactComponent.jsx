import React from "react";

import "./contact.css";

function ContactComponent({ pageTitle }) {
  return (
    <div className="contact-container">
      <h1>{pageTitle}</h1>
 
      <p className="contact-item">
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/lucas-carneiro-dos-santos-982a97268/">
          Meu Perfil
        </a>
      </p>
      <p className="contact-item">
        GitHub:{" "}
        <a href="https://github.com/lucascarneiro88">Meu Perfil do GitHub</a>
      </p> 
      <p className="contact-item">Telefone: 48 991852137</p>
      <p className="contact-item">E-mail: carneirolucas88@gmail.com</p>
    </div>
  );
}

export default ContactComponent;
