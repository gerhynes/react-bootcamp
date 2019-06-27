import React, { Component } from "react";
import "./Form.css";

export default class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(`You typed ${this.state.username}`);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div className="MultipleForm">
        <h1>Form with Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="Form-input"
            name="username"
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            className="Form-input"
            name="email"
            type="email"
            id="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="Form-input"
            name="password"
            type="password"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="Form-btn">Submit!</button>
        </form>
      </div>
    );
  }
}
