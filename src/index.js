import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


let forClick=()=>{
    console.log("Mood")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={forClick} />
  </div>,
  document.getElementById('root')
);