import React from "react";
import { Link } from "react-router-dom";
// Importando o SVG da camera
import { ReactComponent as CameraIcon } from "../../Assets/camera.svg";
import { useSelector } from "react-redux";
import useMedia from "../../Hooks/useMedia";

const PhotosGridItem = () => {
  const { data } = useSelector((state) => state.curated);

  const matchMedia = useMedia("(min-width: 550px)");

  // Função que define o span de column e row
  // que cada imagem deve ocupar no grid baseado
  // no seu tamanho
  const getSpanEstimate = (width, height) => {
    if (matchMedia) {
      if (width > height) {
        return {
          gridColumnEnd: `span 2`,
          gridRowEnd: `span 1`,
        };
      } else {
        return {
          gridColumnEnd: `span 1`,
          gridRowEnd: `span 2`,
        };
      }
    }
  };

  // Limpando a URL da imagem para colocar a
  // sua descrição no alt
  const getPhotoDescription = (url) => {
    const description = url
      .replace("https://www.pexels.com/photo/", "")
      .replace(/\d/g, "");
    return description;
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
            <Link to={`/foto/${photo.id}/${getPhotoDescription(photo.url)}`}>
              <img
                src={photo.src.large}
                alt={`${getPhotoDescription(photo.url)}`}
              />
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
