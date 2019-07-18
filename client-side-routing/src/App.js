import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/">
            About
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog">
            Dog
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/c">
            Dog(c)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/dog/r">
            Dog(r)
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">
            Contact
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/dog" component={Dog} />
          <Route exact path="/dog/c" component={() => <Dog name="Muffins" />} />
          <Route exact path="/dog/r" render={() => <Dog name="Briciola" />} />
          <Route exact path="/dog/hater" component={Hater} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;

// The difference between component props and render props in routes is that component will instantiate a new component every time while render will reuse an existing component.

// Behind the scenes, component calls React.createElement(component, props) while render simply calls render(props).

// If you want to assign props, use render. For simple components, you can use component.
