import React from "react";
import { useSelector } from "react-redux";
// Importando os SVG de camera
import { ReactComponent as CameraWhiteIcon } from "../../Assets/camera.svg";
import { ReactComponent as CameraDarkIcon } from "../../Assets/cameraDark.svg";
import Head from "../Helpers/Head";

const PhotoContent = () => {
  // Acessando o estado com os dados da foto
  const { data } = useSelector((state) => state.photo);
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

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
      {data && (
        <>
          <div className="image">
            <img
              src={`${data.src.large2x}`}
              alt={getPhotoDescription(data.url)}
            />
          </div>
          <div className="photoDetails">
            <div className="photographer">
              <div>
                {theme ? <CameraWhiteIcon /> : <CameraDarkIcon />}
                <h3> Fotógrafo </h3>
              </div>
              <a
                className={`${theme ? "lightColor" : "darkColor"}`}
                href={data.photographer_url}
                target="_blank"
                rel="noreferrer"
                title={`Ver perfil do fotógrafo no Pexels`}
              >
                {" "}
                {data.photographer}{" "}
              </a>
            </div>
            <div className="resolution">
              <h3> Resolução </h3>
              <p>
                {data.width} x {data.height} pixels
              </p>
            </div>
            <div className="color">
              <h3> Cor predominante </h3>
              <span style={{ background: `${data.avg_color}` }}></span>
            </div>
            <div className="download">
              <a href={data.url} target="_blank" rel="noreferrer">
                Baixe no Pexels
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PhotoContent;
