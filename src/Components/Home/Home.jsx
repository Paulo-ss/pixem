import React from "react";
import Jumbotron from "./Jumbotron";
import PalavrasChave from "./PalavrasChave";

const Home = () => {
  return (
    <section>
      {/* Section com a imagem de fundo e o campo de search */}
      <Jumbotron />
      {/* Section com as palavras chave para pesquisa */}
      <PalavrasChave />
    </section>
  );
};

export default Home;
