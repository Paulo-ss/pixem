import React from "react";
import Search from "../Search/Search";
import jumboImg from "../../Assets/jumboImg.jpg";

const Jumbotron = () => {
  return (
    <section className="jumbotron">
      <div className="coverImg">
        <img src={jumboImg} alt="Imagem de fundo do jumbotron" />
      </div>
      {/* Input de pesquisa */}
      <Search />
    </section>
  );
};

export default Jumbotron;
