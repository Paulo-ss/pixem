import React from "react";
import PropTypes from "prop-types";

const TotalResults = ({ totalResults }) => {
  return (
    <div className="total">
      <p style={{ textAlign: "right", margin: "1.5rem 0" }}>
        {totalResults} resultados
      </p>
    </div>
  );
};

TotalResults.propTypes = {
  totalResults: PropTypes.string.isRequired,
};

export default TotalResults;
