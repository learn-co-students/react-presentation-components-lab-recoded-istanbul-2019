// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
        mood: 'happy',
    }
  }

  handleClick = () => {
    // this.state.mood !== this.state.mood 
    const x = (this.state.mood === 'happy' ? 'sad' : 'happy')
    this.setState({ mood: x})
     
   
  }

  render() {
      return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
      )
  }


}

export default SimpleComponent;
