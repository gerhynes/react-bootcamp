import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Sardines.css";

class Sardines extends Component {
  render() {
    return (
      <div
        className="Sardines"
        style={{
          backgroundImage:
            "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
        }}
      >
        <Message>
          <h1>You don't eat the sardines. The sardines, they eat you!</h1>
          <Link to="/">Go Back</Link>
        </Message>
      </div>
    );
  }
}

export default Sardines;
