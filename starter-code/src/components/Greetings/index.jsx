import React from "react";

export default function index(props) {
  switch (props.lang) {
    case "de":
      return <div>Hallo, {props.children}</div>;
    case "fr":
      return <div>Bonjour, {props.children}</div>;
    default:
      return <div>Maaaá Men</div>;
  }
}
