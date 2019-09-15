import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return <button onClick={() => alert("Clicked!")}>Click Me!</button>;
  }
}
