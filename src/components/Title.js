import React from "react";

function Title({ text, color,titleType, fontSize }) {
  return (
    <div>
      {titleType === 1 ? (
        <h1 style={{ fontWeight: "semibold", color: `${color}`, fontSize: `${fontSize}` }}>{text}</h1>
      ) : (
        <h2 style={{ fontWeight: "semibold", color: `${color}`,fontSize: `${fontSize}` }}>{text}</h2>
      )}
    </div>
  );
}

export default Title;
