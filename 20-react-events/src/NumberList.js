import React, { Component } from "react";
import NumberItem from "./NumberItem";

export default class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }
  render() {
    let nums = this.state.nums.map(n => (
      <NumberItem value={n} remove={() => this.remove(n)} />
    ));
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

// Passing functions to child components

// This is a very common pattern in React
// Children are often not stateful but tell their parents to change state

// Data flow
/* A parent component defines a function 
    -> the fn is passed as a prop to a child component 
      -> the child invokes the prop 
        -> the parent fn is called, setting a new state 
          -> the parent is component is re-rendered along with its children
*/
