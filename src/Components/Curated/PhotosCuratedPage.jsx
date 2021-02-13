import React from "react";
import PhotosCurated from "./PhotosCurated";
import Search from "../Search/Search";
import Head from "../Helpers/Head";

const PhotosCuratedPage = () => {
  return (
    <section>
      <Head
        title="Fotos curated"
        content="Fotos curated escolhidas a dedo pela equipe da Pexels"
      />
      <Search className="fullWindowSize" />
      <PhotosCurated
        animateInstantly={true}
        pagination={true}
        subText="Fotos escolhidas a dedo pela Pexels que são atualizadas todos os
        dias para você ficar ligado nas tendências"
      />
    </section>
  );
};

export default PhotosCuratedPage;
