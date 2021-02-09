import React from "react";
import Search from "../Search/Search";
import jumboImg from "../../Assets/jumboImg.jpg";
import TextAnimation from "../Helpers/TextAnimation";

const Jumbotron = () => {
  return (
    <section
      className="jumbotron"
      style={{ backgroundImage: `url(${jumboImg})` }}
    >
      {/* Título animado */}
      <TextAnimation>
        <h1>
          Encontre as melhores fotos e vídeos totalmente gratuitos para seu
          projeto
        </h1>
      </TextAnimation>
      {/* Input de pesquisa */}
      <Search />
    </section>
  );
};

export default Jumbotron;
