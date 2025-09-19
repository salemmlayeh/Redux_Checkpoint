/*
  File: Counter.tsx
  Description: Converted a JavaScript class component to TypeScript.
  Changes made:
  1. Defined 'CounterProps' interface (empty here as no props are used).
  2. Defined 'CounterState' interface to type the state object.
  3. Typed the class component as Component<CounterProps, CounterState>.
  4. Ensures 'count' is always a number and setState is type-safe.
*/

import React, { Component } from 'react';

// Props type (empty in this case)
interface CounterProps {}

// State type
interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
