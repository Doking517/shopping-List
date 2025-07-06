import React from "react";
import "./componentsStyle.css";

function Button({ icon, color, text, bgColor, onClick, height, width, size ,type}) {
  return (
    <span
      className="button"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        height: `${height}`,
        width: `${width}`,
        fontSize: `${size}`,
      }}
    >
      <div className="innerButton">
        <span className="icon">{icon ? "+" : ""}</span>
        <button
          onClick={onClick}
          type={type}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: `${color}`,
            cursor: 'pointer'
          }}
        >
          {" "}
          {text}
        </button>
      </div>
    </span>
  );
}

export default Button;
