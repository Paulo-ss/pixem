import React from "react";
import { Link } from "react-router-dom";
import videoTeste from "../../Assets/videoTeste.mp4";
import { ReactComponent as CameraIcon } from "../../Assets/camera.svg";
import useMedia from "../../Hooks/useMedia";

const VideosGridItem = ({ reducer }) => {
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
    <div className="videoGridItem">
      <Link
        to=""
        onMouseEnter={playVideo}
        onTouchStart={playVideo}
        onMouseLeave={stopVideo}
        onTouchEnd={stopVideo}
      >
        <div className="videoSource">
          <video>
            <source src={videoTeste} type="video/mp4" />
          </video>
        </div>
        <div className="details">
          <div className="author">
            <p> Fotógrafo </p>
            <CameraIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideosGridItem;
