// Code SimplerComponent Here
import React, { Component } from 'react'

const  SimplerComponent = (props) =>{
    return(
        <div onClick = {props.handleClick}>
            I am just happy
        </div>
    )
}


// const SimplerComponent = ({ handleClick }) => {
//     return (
//         <div onClick={handleClick}>
//             I am just happy
//         </div>
//     )
// }

export default SimplerComponent
