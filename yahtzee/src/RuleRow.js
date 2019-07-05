import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, name, doScore, description, rolling } = this.props;
    const disabled = score !== undefined;
    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        onClick={disabled || rolling ? null : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    );
  }
}

export default RuleRow;
