import React from "react";
import { Link } from "react-router-dom";
// Importando o SVG da camera
import { ReactComponent as CameraIcon } from "../../Assets/camera.svg";
import { useSelector } from "react-redux";
import useMedia from "../../Hooks/useMedia";

const PhotosGridItem = () => {
  const { data } = useSelector((state) => state.curated);

  const matchMedia = useMedia("(min-width: 550px)");

  // Estado do carregamento do arquivo da imagem
  const [loadingImg, setLoadingImg] = React.useState(true);

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

  // Definindo cores aleatórias de fundo para o
  // elemento de loading enquanto o arquivo
  // da imagem carrega
  const setBackgroundColor = () => {
    // Valores rgb aleatórios
    const randomRed = Math.floor(Math.random() * (255 - 0) + 0);
    const randomGreen = Math.floor(Math.random() * (255 - 0) + 0);
    const randomBlue = Math.floor(Math.random() * (255 - 0) + 0);

    return {
      background: `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`,
    };
  };

  // Quando o arquivo da imagem está pronto
  // para aparecer na tela, o estado setLoadingImg
  // é trocado para false
  const displayImg = ({ target }) => {
    setLoadingImg(false);
    target.style.opacity = 1;
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
                onLoad={displayImg}
              />
              {loadingImg && (
                <div className="loadingImg" style={setBackgroundColor()}></div>
              )}
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
