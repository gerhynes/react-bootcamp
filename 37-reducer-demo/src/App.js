import React, { useReducer } from "react";
import "./App.css";

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button
        className="button button-primary"
        onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}
      >
        Add 1
      </button>
      <button
        className="button button-primary"
        onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}
      >
        Add 5
      </button>
      <button
        className="button button-primary"
        onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}
      >
        Subtract 1
      </button>
      <button
        className="button button-primary"
        onClick={() => dispatch({ type: "RESET" })}
      >
        RESET
      </button>
    </div>
  );
}

export default App;

// (accumulatedValue, nextItem) => nextAccumulatedValue
// takes two values and "reduces" them down to one value

// In this case, the two values provided to the reducer are:
// - The current state
// - An action that may update the state

// (state, action) => newState

// {type: "ADD_TODO", task: "Walk the dog"}
// {type: "INCREMENT", amount: 3}
// {type: "CHANGE_THREAT_LEVEL", level: "red alert"}
