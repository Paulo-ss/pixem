import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changePage } from "../../Store/Reducers/curated.reducer";
import PropTypes from "prop-types";

const SeeMoreBtn = ({ path, text }) => {
  const { page } = useSelector((state) => state.curated.asyncActionArgs);
  const dispatch = useDispatch();

  return (
    <div className="seeMore">
      <div className="seeMoreBtn">
        <Link to={path} onClick={() => dispatch(changePage(Number(page + 1)))}>
          {text}
        </Link>
      </div>
    </div>
  );
};

SeeMoreBtn.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SeeMoreBtn;
