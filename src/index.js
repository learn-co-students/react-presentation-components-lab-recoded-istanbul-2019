import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
let text="I am just happy";
printSomeThing=()=>{
    text="hello"
}
ReactDOM.render(
  
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={printSomeThing} print={text} />
  </div>,
  document.getElementById('root')
);