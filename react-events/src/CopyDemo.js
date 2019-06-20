import React, { Component } from "react";

export default class CopyDemo extends Component {
  handleCopy() {
    alert("Plagiarism is a serious offence!");
  }
  render() {
    return (
      <div>
        <h3>Try Copying Some of this Text: </h3>
        <section
          style={{
            maxWidth: "600px",
            textAlign: "left",
            display: "inline-block"
          }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </section>
      </div>
    );
  }
}
