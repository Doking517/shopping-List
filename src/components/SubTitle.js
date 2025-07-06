import React from "react";

export default function SubTitle({ p1, p2, color, size, align }) {
  return (
    <div
      className="subtitle"
      style={{
        color: `${color}`,
        fontSize: `${size}`,
        textAlign: `${align}`,
      }}
    >
      <p style={{ fontSize: `${size}` }}>{p1}</p>
      <p style={{ fontSize: `${size}` }}>{p2}</p>
    </div>
  );
}
