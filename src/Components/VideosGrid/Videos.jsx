import React from "react";
import VideosGrid from "./VideosGrid";

const Videos = ({ reducer, asyncAction }) => {
  return (
    <div className="videos">
      <VideosGrid reducer={reducer} asyncAction={asyncAction} />
    </div>
  );
};

export default Videos;
