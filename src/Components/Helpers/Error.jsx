import React from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => {
  return (
    <div className={`error`}>
      <h3> Um erro ocorreu! </h3>
      <p> {error} </p>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
