import React from 'react';
import Greeting from './Greeting';
import './App.css';

const App = () => {
  return (
    <div>
      <Greeting name="Yug" />
      <Greeting name="hello" />
      <Greeting />
    </div>
  );
}

export default App;
