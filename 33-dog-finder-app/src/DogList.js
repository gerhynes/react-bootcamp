import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center my-4">Give a dog a home today</h1>
        <div className="row">
          {this.props.dogs.map(d => {
            return (
              <div className="col-md-6 col-lg-4 text-center Dog" key={d.name}>
                <Link className="card" to={`/dogs/${d.name}`}>
                  <img className="card-img-top" src={d.src} alt={d.name} />
                  <div className="card-body">
                    <h3 className="card-title underline mt-3">{d.name}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
