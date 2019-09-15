import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";
import "./CoinContainer.css";

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1560713969/irish-two-euro-face_qcuftk.jpg"
      },
      {
        side: "tails",
        imgSrc:
          "https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1560713976/irish-two-euro-reverse_uf62ec.jpg"
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
        numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h1>Let's Flip a Coin</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip the Coin!</button>
        <p>
          Out of {this.state.numFlips}, there have been {this.state.numHeads}{" "}
          heads and {this.state.numTails} tails.
        </p>
      </div>
    );
  }
}
