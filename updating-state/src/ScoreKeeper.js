import React, { Component } from "react";

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  singleKill() {
    // Not a good idea to update state like this
    // if it relies on existing state values
    this.setState({ score: this.state.score + 1 });
  }
  // tripleKill() {
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  // }
  // tripleKill() {
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  // }
  incrementScore(currentState) {
    return { score: currentState.score + 1 };
  }
  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    );
  }
}

// Setting State Using State

// setState is asynchronous. It's risky to assume the previous call has finished when you call it. Also, React will sometimes batch calls to setState for performace reasons.

// Instead of passing an object to setState, pass a callback with the current state as a parameter.
// The callback should return an object representing the new state.

// The fact that you can pass a function to this.setState lends itself nicely to a more advanced pattern, functional setState.
// Describe your state updates abstractly as seperate functions.
// This is nicer to read, easier to test, and is used a lot in Redux.
