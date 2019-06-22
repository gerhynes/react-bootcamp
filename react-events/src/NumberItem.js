import React, { Component } from "react";

export default class NumberItem extends Component {
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.props.remove}>X</button>
      </li>
    );
  }
}
