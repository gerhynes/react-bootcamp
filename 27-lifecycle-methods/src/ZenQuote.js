import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

export default class ZenQuote extends Component {
  constructor(props) {
    console.log("Inside Constructor");

    super(props);
    this.state = { quote: "", isLoaded: false };
  }
  componentDidMount() {
    console.log("Inside Component Did Mount");

    axios.get("https://api.github.com/zen").then(response => {
      setTimeout(() => {
        this.setState({ quote: response.data, isLoaded: true });
      }, 3000);
    });
  }
  componentDidUpdate() {
    console.log("Inside Component Did Update");
  }
  render() {
    console.log("Inside Render");

    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}
