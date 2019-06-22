import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

export default class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("REMOVING");
    console.log(num);
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }
  render() {
    // Key must be unique!
    let nums = this.state.nums.map(n => (
      <BetterNumberItem key={n} value={n} remove={this.remove} />
    ));
    return (
      <div className="BetterNumberList">
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

// Where to bind functions?

// Higher is better, don't bind in the child component if you don't need to
// If you need a parameter, pass it down to the child as a prop, then bind in parent and child
// Avoid inline arrow fns / binding if possible
// There is no need to bind in the constructor and make an inline fn
// Focus on communication between components first, you can always refactor for performance later

// Naming conventions

// React doesn't care
// For consistency, try action / handleAction
// In the parent component, give the fn a name that corresponds to behaviour (remove, add, open, toggle)
// In the child, use the name of the action + handle to name the event handler (handleRemove, handleAdd, handleOpen, handleToggle)

// Lists and Keys

// key is a special str attr to include when creating lists of elements
// keys help React to identify which items are changed, added, removed
// keys give repeated elements a stable identity
// Use a str that uniquely identifies the item among its siblings
// Most often you would use the IDs from yor data
// If you don't have stable IDs, you can use the iteration index but this will cause issues if you ever change the order of the items
