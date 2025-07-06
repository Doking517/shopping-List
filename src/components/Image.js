import React from "react";

export default function Image({ src , width, height, scale}) {
  return (
    <div >
      <img src={src} alt={src} style={{
        width: `${width}`,
        height: `${height}`,
        scale: `${scale}`
      }}/>
    </div>
  );
}
