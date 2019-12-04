import React, { Component } from "react";

export class index extends Component {
  constructor() {
    super();
    this.colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    this.state = {
      likes: 0,
      divStyle: {
        fontFamily: "Segoe UI",
        padding: "1em",
        backgroundColor: "purple",
        margin: "0.5em",
        color: "white",
        fontWeight: "bold"
      }
    };
    this.buttonAction = this.buttonAction.bind(this);
  }
  buttonAction() {
    let fontColor = "white";
    let likes = this.state.likes + 1;
    let color = this.colors[Math.round(Math.random() * this.colors.length)];
    if (color === "white" || color === "yellow" || color === "orange") {
      fontColor = "black";
    }
    this.setState({
      likes,
      divStyle: {
        fontFamily: "Segoe UI",
        padding: "1em",
        backgroundColor: color,
        margin: "0.5em",
        color: fontColor,
        fontWeight: "bold"
      }
    });
  }
  like(likes) {
    if (likes === 1) {
      return "like";
    } else {
      return "likes";
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.buttonAction();
          }}
          style={this.state.divStyle}
        >
          {this.state.likes} {this.like(this.state.likes)}{" "}
        </button>
      </div>
    );
  }
}

export default index;
