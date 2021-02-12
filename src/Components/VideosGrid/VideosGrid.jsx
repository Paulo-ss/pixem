import React from "react";
import VideosGridItem from "./VideosGridItem";

const VideosGrid = ({ reducer, asyncAction }) => {
  return (
    <div className="videosGrid">
      <VideosGridItem reducer={reducer} />
    </div>
  );
};

export default VideosGrid;
