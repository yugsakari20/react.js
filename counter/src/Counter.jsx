import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div class="counter-container">
      <h1 >Counter</h1>
      <h2 >{count}</h2>
      <div class="counter-buttons">
        <button class="counter-button increment" onClick={increment}>
          +
        </button>
        <button className="counter-button decrement" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
