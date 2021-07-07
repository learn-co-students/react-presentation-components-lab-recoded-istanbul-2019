// Code SimpleComponent Here
import React, { Component } from "react";

export class SimpleComponent extends Component {
  state = {
    mood: "happy",
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }

  handleClick = () => {
    this.setState((prevState) => ({
      mood: prevState.mood === "happy" ? "sad" : "happy",
    }));
  };
}

export default SimpleComponent;
