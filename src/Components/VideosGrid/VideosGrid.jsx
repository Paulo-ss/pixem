import React from "react";
import VideosGridItem from "./VideosGridItem";
import { useDispatch, useSelector } from "react-redux";
import LoadingGrid from "../Helpers/LoadingGrid";
import Error from "../Helpers/Error";

const VideosGrid = ({ reducer, asyncAction }) => {
  // Estados do reducer passado por props
  const { loading, error, perPage, page } = useSelector(
    (state) => state[reducer]
  );
  // dispatch
  const dispatch = useDispatch();

  // Fazendo uma requisição através da asyncAction
  React.useEffect(() => {
    dispatch(asyncAction({ perPage, page }));
  }, [dispatch, perPage, page, asyncAction]);

  if (error) return <Error error={error} />;
  return (
    <div className="videosGrid">
      {loading ? <LoadingGrid /> : <VideosGridItem reducer={reducer} />}
    </div>
  );
};

export default VideosGrid;
