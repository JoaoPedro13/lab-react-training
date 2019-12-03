import React from "react";

function index(props) {
  let randomNumber = Math.floor(Math.random() * props.max) + props.min;
  return (
    <div>
      <p>
        Return a value between {props.min} and {props.max} => {randomNumber}
      </p>
    </div>
  );
}

export default index;
