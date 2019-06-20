import React, { Component } from "react";
import "./WiseSquare.css";

export default class WiseSquare extends Component {
  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }
  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
  };
  dispenseWisdom() {
    let { messages } = this.props;
    let randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
  }
  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        <span role="img" aria-label="Wise owl emoji">
          🦉
        </span>
      </div>
    );
  }
}

/*
 Three common ways to bind this:

 1. Inline
  - Very explicit
  - But must be bound multiple times if passed to multiple components
 - A new function is created on every render

 2. Arrow Functions
  - No mention of bind
  - Less clear
  - Runs into the same problems if you need to pass the fn to multiple components

 3. Bind in the constructor 
  - Only need to bind once
  - More performant
  - Subjectively ugly...
 */
