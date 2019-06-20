import React, { Component } from "react";
import "./AnnoyingForm.css";

export default class AnnoyingForm extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 56) {
      alert("***************** I LOVE THE * CHARACTER! *****************");
    } else {
      alert("BOO!");
    }
  }
  render() {
    return (
      <div className="AnnoyingForm">
        <h2>Try Typing in Here:</h2>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
