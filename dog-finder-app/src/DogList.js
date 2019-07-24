import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center my-4">Give a dog a good home</h1>
        <div className="row">
          {this.props.dogs.map(d => {
            return (
              <div className="col-md-6 col-lg-4 text-center Dog" key={d.name}>
                <Link to={`/dogs/${d.name}`}>
                  <img src={d.src} alt={d.name} />
                  <h3 className="underline mt-3">{d.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
