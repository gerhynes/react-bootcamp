import React, { Component } from "react";
import Game from "./Game";
import Demo from "./Demo";
import Rando from "./Rando";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import Clicker from "./Clicker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicker />
      </div>
    );
  }
}

export default App;
