import React from "react";
import PhotosGridItem from "./PhotosCuratedGridItem";

const PhotosGrid = () => {
  return (
    <div className={`grid`}>
      {/* Componente que retorna cada foto retornada pela API */}
      <PhotosGridItem />
    </div>
  );
};

export default PhotosGrid;
