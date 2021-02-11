import React from "react";

const TotalResults = ({ totalResults }) => {
  return (
    <div className="total">
      <p style={{ textAlign: "right", margin: "1.5rem 0" }}>
        {totalResults} resultados
      </p>
    </div>
  );
};

export default TotalResults;
