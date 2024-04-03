import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

function NavBar({ pageTitle }) {
  return (
    <nav className="navbar">
      <h1>{pageTitle}</h1>
      <div className="links-container">
        <ul className="links-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
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
    </nav>
  );
}

export default NavBar;
