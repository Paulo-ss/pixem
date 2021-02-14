import React from "react";
import VideosGridItem from "./VideosGridItem";
import { useDispatch, useSelector } from "react-redux";
import LoadingGrid from "../Helpers/LoadingGrid";
import Error from "../Helpers/Error";
import PropTypes from "prop-types";

const VideosGrid = ({ reducer, asyncAction }) => {
  const { loading, error, asyncActionArgs } = useSelector(
    (state) => state[reducer]
  );
  // dispatch
  const dispatch = useDispatch();

  // Fazendo uma requisição através da asyncAction
  React.useEffect(() => {
    dispatch(asyncAction({ ...asyncActionArgs }));
  }, [dispatch, asyncAction, asyncActionArgs]);

  if (error) return <Error error={error} />;
  return (
    <div className="videosGrid">
      {loading ? <LoadingGrid /> : <VideosGridItem reducer={reducer} />}
    </div>
  );
};

VideosGrid.propTypes = {
  reducer: PropTypes.string.isRequired,
  asyncAction: PropTypes.func.isRequired,
};

export default VideosGrid;
