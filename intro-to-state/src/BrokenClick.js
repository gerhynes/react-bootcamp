import React, { Component } from "react";

export default class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}
