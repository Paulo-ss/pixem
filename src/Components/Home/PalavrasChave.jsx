import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PalavrasChave = () => {
  // Acessando o tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <section className={`palavrasChave ${theme ? "darkTheme" : "lightTheme"}`}>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1> Palavras chave para a busca </h1>
          </div>
          <div className={`palavras ${theme ? "lightColor" : "darkColor"}`}>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/natureza"> natureza </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/carros"> carros </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/tecnologia"> tecnologia </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/banco"> banco </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/amor"> amor </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/cruz"> cruz </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/futebol"> futebol </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/esportes"> esportes </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/pessoas"> pessoas </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalavrasChave;
