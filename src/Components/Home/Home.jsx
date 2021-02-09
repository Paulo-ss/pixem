import React from "react";
import Search from "../Search/Search";
import PhotosCurated from "../SearchResults/Photos/Curated/PhotosCurated";
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
      <PhotosCurated title="Fotos Curated" shape={true} seeMore={true} />
    </section>
  );
};

export default Home;
