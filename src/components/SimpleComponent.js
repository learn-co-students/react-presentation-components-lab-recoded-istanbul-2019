// Code SimpleComponent Here
import React from "react"
import SimplerComponent from "./SimplerComponent"

export default class SimpleComponent{
  constructor(props){
    super(props)
    this.state = {
      mood:"Happy",
      bool:true
    }
  }
   handleClick = () =>this.setState({
     mood:bool ? "Happy":"Sad",
     bool:!bool
   })
  render(){
    return (
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
      )
  }
  
}