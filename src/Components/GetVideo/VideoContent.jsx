import React from "react";
import { useSelector } from "react-redux";
// Importando os SVGs
import { ReactComponent as CameraWhiteIcon } from "../../Assets/camera.svg";
import { ReactComponent as CameraDarkIcon } from "../../Assets/cameraDark.svg";

const VideoContent = () => {
  // Data do reducer de video
  const { data } = useSelector((state) => state.video);

  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Função que define o tamanho do vídeo
  // baseado na sua orientaçao
  const setVideoProportion = (width, height) => {
    if (width > height) {
      return {
        width: "auto",
        height: `300px`,
      };
    } else {
      return {
        width: "auto",
        height: `600px`,
      };
    }
  };

  return (
    <>
      {data && (
        <>
          <div
            className="video"
            style={setVideoProportion(data.width, data.height)}
          >
            <video
              muted
              controls
              controlsList="nodownload"
              disablePictureInPicture
            >
              <source
                src={data.video_files[0].link}
                type={data.video_files[0].file_type}
              />
            </video>
          </div>
          <div className="videoDetails">
            <div className="photographer">
              <div>
                {theme ? <CameraWhiteIcon /> : <CameraDarkIcon />}
                <h3> Cinegrafista </h3>
              </div>
              <a
                className={`${theme ? "lightColor" : "darkColor"}`}
                href={data.user.url}
                target="_blank"
                rel="noreferrer"
                title={`Ver perfil do fotógrafo no Pexels`}
              >
                {" "}
                {data.user.name}{" "}
              </a>
            </div>
            <div className="resolution">
              <h3> Resolução </h3>
              <p>
                {data.width} x {data.height} pixels
              </p>
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

export default VideoContent;
