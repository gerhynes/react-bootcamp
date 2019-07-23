import React, { Component } from "react";
import "./DogList.css";

export default class extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map(d => {
              return (
                <div className="col-md-6 col-lg-4 text-center Dog" key={d.name}>
                  <img src={d.src} alt={d.name} />
                  <h3>{d.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
