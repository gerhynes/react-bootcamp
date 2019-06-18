import React, { Component } from "react";
import Box from "./Box";
import "./BoxesContainer.css";

export default class BoxesContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
    allColors: [
      "#F3E5F5",
      "#E1BEE7",
      "#CE93D8",
      "#BA68C8",
      "#AB47BC",
      "#9C27B0",
      "#8E24AA",
      "#7B1FA2",
      "#6A1B9A",
      "#4A148C",
      "#EA80FC",
      "#E040FB",
      "#D500F9",
      "#AA00FF"
    ]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxesContainer">{boxes}</div>;
  }
}
