import React, { Component } from "react";
import "./LottoBall.css";

export default class LottoBall extends Component {
  render() {
    return <div className="LottoBall">{this.props.num}</div>;
  }
}
