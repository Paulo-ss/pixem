import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Importando o logo da pixem
import logoPixem from "../../Assets/logoPixemLight.png";
// Importando os ícones do github
import { ReactComponent as GithubIcon } from "../../Assets/github.svg";
import { ReactComponent as GithubWhiteIcon } from "../../Assets/githubWhite.svg";

const Footer = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <footer className={`footer`}>
      <div className="container">
        <div className="footerWrapper">
          <div className="collumn logo">
            <Link to="/">
              <img src={logoPixem} alt="Logo da Pixem Stock" />
            </Link>

            <p> Alguns direitos reservados. </p>
          </div>
          <div className="collumn">
            <h2 className="subtitle"> Pexels </h2>
            <div className="text">
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noreferrer"
                title="Pexels"
              >
                Fotos e vídeos fornecidos pela Pexels
              </a>
              <img
                src="https://images.pexels.com/lib/api/pexels-white.png"
                alt="Logo da Pexels"
              />
            </div>
          </div>
          <div className="collumn">
            <h2 className="subtitle"> Flaticon </h2>
            <div className="text">
              <div>
                Icones feitos pela{" "}
                <a
                  href="https://www.flaticon.com/authors/pixel-perfect"
                  title="Pixel perfect"
                >
                  {" "}
                  Pixel perfect{" "}
                </a>
                da
                <a href="https://www.flaticon.com/" title="Flaticon">
                  {" "}
                  www.flaticon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`miniFooter ${theme ? "darkTheme" : "lightTheme"}`}>
        <p>
          <a
            href="https://github.com/Paulo-ss"
            target="_blank"
            rel="noreferrer"
            className={`${theme ? "lightColor" : "darkColor"}`}
          >
            {" "}
            Site desenvolvido por Paulo_ss{" "}
            {theme ? <GithubWhiteIcon /> : <GithubIcon />}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
