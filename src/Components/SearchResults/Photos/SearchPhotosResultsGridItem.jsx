import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CameraIcon } from "../../../Assets/camera.svg";

const SearchPhotosResultsGridItem = () => {
  const { data } = useSelector((state) => state.searchPhotos);

  // Função que define o span de column e row
  // que cada imagem deve ocupar no grid baseado
  // no seu tamanho
  const getSpanEstimate = (width, height) => {
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
  };

  // Limpando a URL da imagem para colocar a
  // sua descrição no alt
  const getPhotoDescription = (url) => {
    const description = url
      .replace("https://www.pexels.com/photo/", "")
      .replace(/\d/g, "");
    return description;
  };

  if (data?.total_results === 0) {
    return (
      <div className="noResultsFound">
        <p> Nenhum resultado foi encontrado </p>
      </div>
    );
  }
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

export default SearchPhotosResultsGridItem;
