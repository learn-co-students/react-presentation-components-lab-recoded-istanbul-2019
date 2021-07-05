import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
import { ProgressPlugin } from 'webpack';


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={()=> console.log('No happy anymore')} />
  </div>,
  document.getElementById('root')
);