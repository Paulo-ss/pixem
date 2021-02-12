import React from "react";
import PhotosCurated from "../Curated/PhotosCurated";
import Videos from "../VideosGrid/Videos";
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
      <PhotosCurated shape={true} seeMore={true} />
      <Videos />
    </section>
  );
};

export default Home;
