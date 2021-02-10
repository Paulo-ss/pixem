import React from "react";
import { Link } from "react-router-dom";
// Importando o SVG da camera
import { ReactComponent as CameraIcon } from "../../../../Assets/camera.svg";
import { useSelector } from "react-redux";

const PhotosGridItem = () => {
  const { data } = useSelector((state) => state.curated);

  // Função que define o span de column e row
  // que cada imagem deve ocupar no grid baseado
  // no seu tamanho
  const getSpanEstimate = (width, height) => {
    if (width > height) {
      if (width > 3500) {
        return {
          gridColumnEnd: `span 2`,
          gridRowEnd: `span 1`,
        };
      } else {
        return {
          gridColumnEnd: `span 1`,
          gridRowEnd: `span 1`,
        };
      }
    } else {
      if (height > 4000) {
        return {
          gridColumnEnd: `span 1`,
          gridRowEnd: `span 2`,
        };
      } else {
        return {
          gridColumnEnd: `span 1`,
          gridRowEnd: `span 1`,
        };
      }
    }
  };

  return (
    <>
      {data &&
        data.photos.map((photo) => (
          <div
            className={`gridItem`}
            key={photo.id}
            style={getSpanEstimate(photo.width, photo.height)}
          >
            <Link to="">
              <img src={photo.src.large} alt="Foto qualquer" />
              <div className="details">
                <div className="author">
                  <p> {photo.photographer} </p>
                  <CameraIcon />
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default PhotosGridItem;
