import React from "react";
import LottoBall from "./LottoBall";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LottoBall num={17} />
      <LottoBall num={12} />
      <LottoBall num={6} />
      <LottoBall num={21} />
    </div>
  );
}

export default App;
