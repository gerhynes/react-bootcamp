import React, { Component } from "react";

export default class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };
  constructor(props) {
    super(props);
    this.state = { icons: ["angry", "baby"] };
    this.addIcon = this.addIcon.bind(this);
  }

  // Don't do this
  // addIcon() {
  //   let index = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[index];
  //   let icons = this.state.icons;
  //   icons.push(newIcon);
  //   this.setState({ icons: icons });
  // }

  // Do this
  addIcon() {
    let index = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[index];
    this.setState({ icons: [...this.state.icons, newIcon] });
  }
  render() {
    const newIcons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {newIcons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

// Mutating nested data structures in your state can cause problems with React.

// It's better to use a pure function to make a new copy of the data structure.

// Pure functions such as .map, .filter, and .reduce are your friends. So is the …spread operator.

// There is a slight efficiency cost due to the O(N) space/time required to make a copy, but it’s almost always worth it to ensure that your app doesn’t have extremely difficult to detect bugs due to mischevious side effects.

// While it sounds like an oxymoron, immutable state just means that there is an old state object and a new state object that are both snapshots in time.

// The safest way to update state is to make a copy of it, and then call this.setState with the new copy.

// This pattern is a good habit to get into for React apps and required for using Redux.
