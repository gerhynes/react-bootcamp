import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={About} />
        <Route path="/dog" component={Dog} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
