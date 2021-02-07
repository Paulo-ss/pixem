import React from "react";
import { Link } from "react-router-dom";

const SeeMoreBtn = ({ path, text }) => {
  return (
    <div className="seeMore">
      <div className="seeMoreBtn">
        <Link to={path}> {text} </Link>
      </div>
    </div>
  );
};

export default SeeMoreBtn;
