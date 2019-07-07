import React from "react";
import Timer from "./Timer";
import ZenQuote from "./ZenQuote";
import GithubUserInfo from "./GithubUserInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GithubUserInfo username="QuincyLarson" />
      <GithubUserInfo username="colt" />
    </div>
  );
}

export default App;
