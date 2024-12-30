import React from 'react';
import './Greeting.css';

const Greeting = ({ name }) => {
  const displayName = name?.trim() ? name : 'Guest';

  return (
    <div>
      <h1>Hello, {displayName}!</h1>
      <p>We're glad to have you here.</p>
    </div>
  );
};

export default Greeting;
