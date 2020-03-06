// Code SimplerComponent Here
import React from 'react'

 function SimplerComponent(props){
    
        return (
            <div onClick={this.props.handleClick}>
                 I am just happy
        <p>{this.props.print}</p>
            </div>
        )
    
}

export default SimplerComponent