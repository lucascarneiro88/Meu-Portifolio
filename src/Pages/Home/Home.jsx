import React from "react";
import { Link } from "react-router-dom";
import AboutComponent from "../../Components/AboutComponent/AboutComponent";



function Home() {
  return (
    <div>
      <h1>Lucas Carneiro dos Santos</h1>
      <h2>FullStack Developer</h2>
      <div>
        <AboutComponent/>
      </div>
      
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
