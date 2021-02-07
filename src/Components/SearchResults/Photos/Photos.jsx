import React from "react";
import { useSelector } from "react-redux";
import SeeMoreBtn from "../../Helpers/SeeMoreBtn";
import ShapeDivider from "../../Helpers/ShapeDivider";
import PhotosGrid from "./PhotosGrid";

const Photos = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <section
      className={`photos ${
        theme ? "darkTheme darkThreeBg" : "lightTheme lightThreeBg"
      }`}
    >
      {/* Shape divider entre as sections */}
      <ShapeDivider />
      <div className="container">
        <div className="title">
          <h1> Fotos Curated </h1>
        </div>
        {/* Grid com as fotos retornadas pela API */}
        <PhotosGrid />
        {/* Botão de ver mais que leva para outra página com mais resultados */}
        <SeeMoreBtn path="/" text="Ver mais" />
      </div>
    </section>
  );
};

export default Photos;
