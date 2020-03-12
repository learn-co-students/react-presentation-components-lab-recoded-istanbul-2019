import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let handleClicka=()=>{
 console.log('hey')
}
ReactDOM.render(
  <div>

    <SimpleComponent />
    <SimplerComponent handleClick={handleClicka} />
  </div>,
  document.getElementById('root')
);