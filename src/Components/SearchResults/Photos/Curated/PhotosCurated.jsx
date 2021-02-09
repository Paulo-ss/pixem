import React from "react";
import { useSelector } from "react-redux";
import Pexels from "../../../Helpers/Pexels";
import SeeMoreBtn from "../../../Helpers/SeeMoreBtn";
import ShapeDivider from "../../../Helpers/ShapeDivider";
import PhotosGrid from "./PhotosCuratedGrid";

const Photos = ({ title, shape, seeMore }) => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <section
      className={`photos ${
        theme ? "darkTheme darkThreeBg" : "lightTheme lightThreeBg"
      }`}
    >
      {/* Shape divider entre as sections */}
      {shape && <ShapeDivider />}
      <div className="container">
        <div className="title">
          <h1> {title} </h1>
        </div>
        {/* Grid com as fotos retornadas pela API */}
        <PhotosGrid />
        {/* Texto atribuindo créditos a Pexels */}
        <Pexels />
        {/* Botão de ver mais que leva para outra página com mais resultados */}
        {seeMore && <SeeMoreBtn path="/" text="Ver mais" />}
      </div>
    </section>
  );
};

export default Photos;
