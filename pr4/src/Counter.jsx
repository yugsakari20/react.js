import React, { Component } from "react";
import "./Counter.css"; 

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((e) => ({ count: e.count + 1 }));
  };

  decrement = () => {
    this.setState((e) => ({ count: e.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button className="counter-btn" onClick={this.decrement}>
            -
          </button>
          <div className="counter-display">{this.state.count}</div>
          <button className="counter-btn" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
