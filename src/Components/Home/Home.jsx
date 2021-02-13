import React from "react";
import PhotosCurated from "../Curated/PhotosCurated";
import Features from "./Features";
import Jumbotron from "./Jumbotron";
import PalavrasChave from "./PalavrasChave";
import Head from "../Helpers/Head";

const Home = () => {
  return (
    <section>
      <Head
        title="As melhores fotos e vídeos gratuitos"
        content="Pixem Stock | Encotre as melhores fotos e vídeos gratuitos para você"
      />
      {/* Section com a imagem de fundo e o campo de search */}
      <Jumbotron />
      {/* Section com as palavras chave para pesquisa */}
      <PalavrasChave />
      {/* Section com o que o site fornece */}
      <Features />
      {/* Section com as fotos do endpoint curated */}
      <PhotosCurated shape={true} seeMore={true} />
    </section>
  );
};

export default Home;
