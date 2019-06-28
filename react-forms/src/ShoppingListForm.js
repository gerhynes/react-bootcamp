import React, { Component } from "react";

export default class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="name">Quantity:</label>
        <input
          type="text"
          id="qty"
          name="qty"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button>Add Item!</button>
      </form>
    );
  }
}
