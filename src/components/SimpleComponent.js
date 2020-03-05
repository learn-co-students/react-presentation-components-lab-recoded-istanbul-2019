// Code SimplerComponent Here
import React, { Component } from 'react'

export default class SimplerComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mood:'happy'
        }
    }
    
    handelClick = () => {
        if (this.state.mood === "happy") this.setState({mood:'sad'})
        else this.setState({mood:'happy'})
    }
    
    render() {
        return (
            <div onClick={this.handelClick}>
                {this.state.mood}
            </div>
        )
    }
}
