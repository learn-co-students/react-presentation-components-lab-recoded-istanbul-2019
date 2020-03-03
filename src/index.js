import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleClick = (event) => {
  const target = event.target;
  if (target.value === 'I am just happy') {
    console.log(target)
    target.innerText = 'I am just sad';
  } else {
    target.innerText = 'I am just happy';
  }
};

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);