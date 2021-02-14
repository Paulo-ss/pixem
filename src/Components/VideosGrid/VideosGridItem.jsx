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

  // Estado do carregamento do arquivo do vídeo
  const [loadingVideo, setLoadingVideo] = React.useState(true);

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
  // do vídeo, o vídeo começe a rodar
  const playVideo = ({ currentTarget }) => {
    const videoPlayer = currentTarget.children[0].children[0];

    if (videoPlayer) {
      videoPlayer.play();
    }
  };

  // Função para quando o mouse sair de cima
  // do vídeo, o vídeo de pause
  const pauseVideo = ({ currentTarget }) => {
    const videoPlayer = currentTarget.children[0].children[0];

    if (videoPlayer) {
      videoPlayer.pause();
    }
  };

  // Definindo cores aleatórias de fundo para o
  // elemento de loading enquanto o arquivo
  // do vídeo carrega
  const setBackgroundColor = () => {
    // Valores rgb aleatórios
    const randomRed = Math.floor(Math.random() * (240 - 15) + 15);
    const randomGreen = Math.floor(Math.random() * (240 - 15) + 15);
    const randomBlue = Math.floor(Math.random() * (240 - 15) + 15);

    return {
      background: `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`,
    };
  };

  // Quando o arquivo da imagem está pronto
  // para aparecer na tela, o estado setLoadingImg
  // é trocado para false
  const displayVideo = ({ target }) => {
    setLoadingVideo(false);
    target.style.opacity = 1;
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
              onMouseLeave={pauseVideo}
              onTouchEnd={pauseVideo}
            >
              <div className="videoSource">
                <video muted onCanPlayThrough={displayVideo}>
                  <source
                    src={video.video_files[0].link}
                    type={video.video_files[0].file_type}
                  />
                </video>
                {loadingVideo && (
                  <div
                    className="loadingVideo"
                    style={setBackgroundColor()}
                  ></div>
                )}
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
