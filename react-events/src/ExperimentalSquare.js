import React, { Component } from "react";
import "./WiseSquare.css";

export default class ExperimentalSquare extends Component {
  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
  };
  dispenseWisdom = () => {
    console.log("THIS is:", this);
    let { messages } = this.props;
    let randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
  };
  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        <span role="img" aria-label="test tube emoji">
          🧪
        </span>
      </div>
    );
  }
}
