import React from "react";
import "./style.css";

function index(props) {
  const stars = Math.round(props.children);
  switch (stars) {
    case 5:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </div>
      );
    case 4:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
        </div>
      );
    case 3:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9733; &#9734; &#9734;</p>
        </div>
      );
    case 2:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9734; &#9734; &#9734;</p>
        </div>
      );
    case 1:
      return (
        <div className="rating">
          <p>&#9733; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
      );
    default:
      return (
        <div className="rating">
          <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
      );
  }
}

export default index;
