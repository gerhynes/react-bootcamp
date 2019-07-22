import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FoodSearch.css";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }
  handleClick(evt) {
    // Do something
    alert("Saved to DB");
    // Redirect somewhere else
    this.props.history.push(`/food/${this.state.query}`);
  }
  render() {
    return (
      <div className="FoodSearch">
        <h1>Search for a food</h1>
        <input
          type="text"
          placeholder="Search for a food"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link className="btn" to={`/food/${this.state.query}`}>
          Go!
        </Link>
        <button className="btn" onClick={this.handleClick}>
          Save New Food
        </button>
      </div>
    );
  }
}
