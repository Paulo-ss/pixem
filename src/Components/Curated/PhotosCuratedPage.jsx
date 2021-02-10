import React from "react";
import PhotosCurated from "./PhotosCurated";
import Search from "../Search/Search";

const PhotosCuratedPage = () => {
  return (
    <section>
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
