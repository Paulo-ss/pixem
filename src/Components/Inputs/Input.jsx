import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, setValue, type, className, id, ...rest }) => {
  return (
    <input
      value={value}
      onChange={setValue}
      type={type}
      className={className}
      id={id}
      name={id}
      {...rest}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
