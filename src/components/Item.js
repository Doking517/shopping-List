import React from "react";

export default function Item({ item, onToggleItems }) {
  return (
    <div
      
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        height: "53px",
        backgroundColor: "#777676",
        borderRadius: "20px",
        padding: "0 1.5em",
        textDecoration: `${item.packed ? "line-through" : "none"}`,
        color: `${item.packed ? "#43BCAE" : "#FFF"}`,
      }}
    >
      <p>{item.name}</p>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
        style={{
          width: "26px",
          height: "29px",
          borderRadius: "50px",
          border: "solid 3px #D9D9D9",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
