import React from "react";
import { Link } from "react-router-dom";
import About from "../../components/aboutComponent/About";

import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <ul className="links">
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
      <h1 className="name">
        Lucas Carneiro
        <br /> dos Santos
      </h1>
      <h2 className="stack">FullStack Developer</h2>
      <div className="about">
        <About />
      </div>
    </div>
  );
}

export default Home;
