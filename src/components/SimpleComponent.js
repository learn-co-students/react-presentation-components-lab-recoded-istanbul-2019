// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  };

  render() {
    return <div onClick={
       () => {
    this.setState({
      mood: "sad"
    });}
    }>{this.state.mood}</div>;
  }
}