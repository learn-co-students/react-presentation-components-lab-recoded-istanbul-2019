// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = (event) => {
    this.setState(prevState => {
      if (prevState.mood === 'happy') return {mood: 'sad'};
      return {mood: 'happy'};
    });
  };

  render(){
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}