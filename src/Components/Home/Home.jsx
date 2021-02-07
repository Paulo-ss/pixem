import React from "react";
import Photos from "../SearchResults/Photos/Photos";
import Features from "./Features";
import Jumbotron from "./Jumbotron";
import PalavrasChave from "./PalavrasChave";

const Home = () => {
  return (
    <section>
      {/* Section com a imagem de fundo e o campo de search */}
      <Jumbotron />
      {/* Section com as palavras chave para pesquisa */}
      <PalavrasChave />
      {/* Section com o que o site fornece */}
      <Features />
      {/* Section com as fotos do endpoint curated */}
      <Photos />
    </section>
  );
};

export default Home;
