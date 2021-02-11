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
              <Link to="/resultados/natureza"> Natureza </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/carros"> Carros </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/tecnologia"> Tecnologia </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/banco"> Banco </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/amor"> Amor </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/cruz"> Cruz </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/futebol"> Futebol </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/esportes"> Esportes </Link>
            </div>
            <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
              <Link to="/resultados/pessoas"> Pessoas </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalavrasChave;
