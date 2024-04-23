import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./navBar.css";
import ThemeToggleIcons from "../ThemeToggleIcons/ThemeToggleIcons";

function NavBar({ pageTitle }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h1 className="page-title">{pageTitle}</h1>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="chk"
          onChange={toggleTheme}
        />
        <label className="label" htmlFor="chk">
          <ThemeToggleIcons theme={theme} />
          <div className="ball"></div>
        </label>
      </div>

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
