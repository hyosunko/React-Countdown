import React from "react";

export default ({ disabled, onClick, color, name }) => (
  <p className="control">
    <button
      className={`button is-${color} is-outlined is-rounded is-medium`}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  </p>
);
