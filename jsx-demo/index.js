function getMood() {
  const moods = ["angry", "hungry", "silly", "quiet", "paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Current mood is {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
