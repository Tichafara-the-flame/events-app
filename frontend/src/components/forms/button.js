import React from "react";

const Button = ({type, text, onClick }) => {
  return (
      <button
          type={type}
          onClick={onClick}
          className="waves-effect waves-light btn"
      >
      {text}
    </button>
  );
};

export default Button;
