import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CameraIcon } from "../../Assets/camera.svg";
import useMedia from "../../Hooks/useMedia";
import { useSelector } from "react-redux";

const VideosGridItem = ({ reducer }) => {
  // Data retornada do fetch
  const { data } = useSelector((state) => state[reducer]);

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
      .replace("https://www.pexels.com/video/", "")
      .replace(/\d/g, "");
    return description;
  };

  // Função para quando o mouse passe por cima
  // do Link a que engloba a img e o vídeo, o
  // video começe a rodar
  const playVideo = ({ currentTarget }) => {
    const videoPlayer = currentTarget.children[0].children[0];
    videoPlayer.play();
  };

  // Quando o mouse sai de cima o Link, o
  // vídeo para de rodar
  const stopVideo = ({ currentTarget }) => {
    const videoPlayer = currentTarget.children[0].children[0];
    videoPlayer.pause();
  };

  return (
    <>
      {data &&
        data.videos.map((video) => (
          <div
            className="videoGridItem"
            key={video.id}
            style={getSpanEstimate(video.width, video.height)}
          >
            <Link
              to=""
              onMouseEnter={playVideo}
              onTouchStart={playVideo}
              onMouseLeave={stopVideo}
              onTouchEnd={stopVideo}
            >
              <div className="videoSource">
                <video muted>
                  <source
                    src={video.video_files[3].link}
                    type={video.video_files[3].file_type}
                  />
                </video>
              </div>
              <div className="details">
                <div className="author">
                  <p> {video.user.name} </p>
                  <CameraIcon />
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default VideosGridItem;
