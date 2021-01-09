import React from "react";

const Textarea = ({ name, value, onChange, label, htmlFor, id }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="materialize-textarea"          
        ></textarea>
        <label htmlFor={htmlFor}>{ label }</label>
      </div>
    </div>
  );
};

export default Textarea;
