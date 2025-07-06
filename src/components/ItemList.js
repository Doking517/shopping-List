import React from "react";

export default function ItemList({ children }) {
  return (
    <div
      style={{
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"1.5em",
        gap:'.3em'
      }}
    >
      {children}
    </div>
  );
}
