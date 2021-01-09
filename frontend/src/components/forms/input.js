import React from "react";

const Input = ({ name, value, onChange, label, htmlFor, id }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
        <label htmlFor={ htmlFor }>{ label }</label>
      </div>
    </div>
  );
};

export default Input;
