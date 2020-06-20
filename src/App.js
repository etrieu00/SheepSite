import React from 'react';
import classes from './App.module.css';

import Landscape from './Layouts/Landscape/Landscape';
import Sky from './Layouts/Sky/Sky';
const App = () => {
  return (
    <div className="App">
      <Sky/>
      <Landscape/>
    </div>
  );
}

export default App;