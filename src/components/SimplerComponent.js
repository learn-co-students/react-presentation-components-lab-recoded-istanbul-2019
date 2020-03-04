// Code SimplerComponent Here
import React from "react"

export default SimplerComponent(props){
  
  handleClick=() =>{
    return "Hey"
  }
  return (
      <div onClick={this.props.handleClick}>
      I am just happy
      </div>
    )
}
