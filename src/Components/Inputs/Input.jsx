import React from "react";

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

export default Input;
