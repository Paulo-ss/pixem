import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CameraIcon } from "../../Assets/camera.svg";
import useMedia from "../../Hooks/useMedia";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const VideosGridItem = ({ reducer }) => {
  // Data retornada do fetch
  const { data } = useSelector((state) => state[reducer]);

  const matchMedia = useMedia("(min-width: 550px)");

  // Função que define o span de column e row
  // que cada vídeo deve ocupar no grid baseado
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

  // Limpando a URL do vídeo para colocar a
  // sua descrição no alt
  const getVideoDescription = (url) => {
    const description = url
      .replace("https://www.pexels.com/video/", "")
      .replace("https://www.pexels.com/pt-br/video/", "")
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
        data.videos.map((video) => (
          <div
            className="videoGridItem"
            key={video.id}
            style={getSpanEstimate(video.width, video.height)}
          >
            <Link
              to={`/video/${video.id}/${getVideoDescription(video.url)}`}
              onMouseEnter={playVideo}
              onTouchStart={playVideo}
              onMouseLeave={stopVideo}
              onTouchEnd={stopVideo}
            >
              <div className="videoSource">
                <video muted>
                  <source
                    src={video.video_files[0].link}
                    type={video.video_files[0].file_type}
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

VideosGridItem.propTypes = {
  reducer: PropTypes.string.isRequired,
};

export default VideosGridItem;
