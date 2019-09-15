import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log("In Constructor");
  }
  componentDidMount() {
    console.log("In Component Did Mount");
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  render() {
    console.log("In Render");
    return <h1>{this.state.time.getSeconds()}</h1>;
  }
}
