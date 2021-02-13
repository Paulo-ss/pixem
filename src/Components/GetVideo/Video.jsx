import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoContent from "./VideoContent";
import { getVideo } from "../../Store/Reducers/video.reducer";
import { useParams } from "react-router-dom";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";

const Video = () => {
  // Estados do reducer de vídeo
  const { loading, error } = useSelector((state) => state.video);

  // Dispatch
  const dispatch = useDispatch();

  // Pegando o id na URL
  const { videoId } = useParams();

  // Fazendo uma requisição no endpoint que
  // retornar um vídeo específico
  React.useEffect(() => {
    dispatch(getVideo(videoId));
  }, [dispatch, videoId]);

  if (error) return <Error error={error} />;
  return (
    <div className="videoContent">
      {loading ? <Loading /> : <VideoContent />}
    </div>
  );
};

export default Video;
