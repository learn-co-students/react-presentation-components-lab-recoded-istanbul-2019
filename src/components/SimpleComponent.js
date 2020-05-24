import React, { Component } from "react";

export class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: "happy",
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      mood: prevState.mood === "happy" ? "sad" : "happy",
    }));
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
