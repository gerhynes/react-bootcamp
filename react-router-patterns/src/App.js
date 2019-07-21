import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* THIS VERSION USING COMPONENT WORKS AND IS SIMPLER */}
        {/* BUT IT WILL NOT WORK IF YOU NEED TO PASS ADDITIONAL PROPS*/}

        {/* <Route exact path='/food/:name' component={Food} /> */}

        {/* THIS VERSION USING RENDER IS LESS CLEAN BUT MORE EXPLICIT */}
        {/* AND YOU CAN PASS IN YOUR OWN ADDITIONAL PROPS */}
        <Route
          exact
          path="/food/:name"
          render={routeProps => <Food {...routeProps} />}
        />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
      </div>
    );
  }
}

export default App;
