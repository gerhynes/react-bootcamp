import React, { Component } from "react";
import "./Meal.css";

export default class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div className="Meal">
        <h1>
          This is a meal of {foodName} and {drinkName}
        </h1>
        <img src={foodUrl} alt={foodName} />
        <img src={drinkUrl} alt={drinkName} />
      </div>
    );
  }
}
