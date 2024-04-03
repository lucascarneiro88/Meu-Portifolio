// Info.jsx
import React from "react";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import NavBar from "../../components/NavBarComponent/NavBar";

function Info() {
  return (
    <div>
      <NavBar pageTitle= "Minhas informações"/>
      <InfoComponent/> 
    </div>
  );
}

export default Info;
