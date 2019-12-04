import React from "react";

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function BoxColor(props) {
  const { r, g, b } = props;
  const color = rgbToHex(r, g, b);
  const divStyle = {
    border: "1px solid black",
    backgroundColor: color,
    width: "25em",
    textAlign: "center"
  };
  return (
    <div style={divStyle}>
      <p>{color}</p>
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;
