import React from "react";
import VideosGrid from "./VideosGrid";
import PropTypes from "prop-types";

const Videos = ({ reducer, asyncAction }) => {
  return (
    <div className="videos">
      <VideosGrid reducer={reducer} asyncAction={asyncAction} />
    </div>
  );
};

Videos.propTypes = {
  reducer: PropTypes.string.isRequired,
  asyncAction: PropTypes.func.isRequired,
};

export default Videos;
