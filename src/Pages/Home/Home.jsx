import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "../../components/AboutComponent/About";
import "./home.css";

function Home() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "./img/background-img.jpg";

    image.onload = () => {
      setBackgroundLoaded(true);
    };

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <div
      className={`home-container ${
        backgroundLoaded ? "background-loaded" : ""
      }`}
    >
      {backgroundLoaded && (
        <>
          <ul className="links-home" id="link-home">
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
          <div className="logo-github">
            <a
              href="https://github.com/lucascarneiro88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github-logo"
                src="./img/logos-redes-sociais/logo-github.png"
                alt="logo do github"
              />
            </a>
          </div>

          <div className="logo-linkedin">
            <a
              href="https://www.linkedin.com/in/lucas-carneiro-dos-santos-982a97268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedin-logo"
                src="./img/logos-redes-sociais/logo-linkedin.png"
                alt="logo do linkedin"
              />
            </a>
          </div>

          <div className="logo-csharp">
            <img
              src="/img/logo-stacks/logo-csharp.png"
              alt="logo stack csharp"
            />
          </div>
          <div className="logo-react">
            <img src="/img/logo-stacks/logo-react.png" alt="logo stack react" />
          </div>
          <div className="logo-js">
            <img
              src="/img/logo-stacks/logo-js.png"
              alt="logo stack java sript"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
