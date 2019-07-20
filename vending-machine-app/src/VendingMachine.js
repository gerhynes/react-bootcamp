import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

export default class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>Hello I am a vending machine. What would you like to eat?</h1>
        </Message>
        <Message>
          <Link exact to="/soda">
            Soda
          </Link>
          <Link exact to="/chips">
            Chips
          </Link>
          <Link exact to="/sardines">
            Fresh Sardines
          </Link>
        </Message>
      </div>
    );
  }
}
