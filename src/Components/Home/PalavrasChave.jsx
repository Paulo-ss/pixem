import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PalavrasChave = () => {
  // Acessando o tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <section className={`palavrasChave ${theme ? "darkTheme" : "lightTheme"}`}>
      <div className="container">
        <div className="title">
          <h1> Palavras chave para a busca </h1>
        </div>
        <div className={`palavras ${theme ? "lightColor" : "darkColor"}`}>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Flor rosa </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Carros </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Tecnologia </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Banco </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Amor </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Cruz </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Futebol </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Esportes </Link>
          </div>
          <div className={`palavra ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
            <Link to=""> Pessoas </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalavrasChave;
