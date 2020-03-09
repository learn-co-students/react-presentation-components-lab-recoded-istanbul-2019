// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
   state = {
      mood:'happy'
    }

    moodHandler =()=>{
      this.setState({
        mood:'sad'
      })
    }
  

  render() {
    return (
      <div onClick={this.moodHandler}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
