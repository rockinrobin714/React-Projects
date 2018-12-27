import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, error: null };
  }
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 })
    } else {
      this.setState({ error: 'There is an error' });
    }
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1, error: null })
  }
    
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          {this.state.error ? this.state.error : 'The counter is currently ' + this.state.counter}
        </h1>
        <button 
          data-test="increment-button"
          onClick={() => this.increment()}
        >
          Increment counter
        </button>
        <button 
          data-test="decrement-button"
          onClick={() => this.decrement()}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
