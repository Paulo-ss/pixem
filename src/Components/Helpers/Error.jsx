import React from "react";

const Error = ({ error }) => {
  return (
    <div className={`error`}>
      <h3> Um erro ocorreu! </h3>
      <p> {error} </p>
    </div>
  );
};

export default Error;
