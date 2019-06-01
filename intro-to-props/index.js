class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" />
        <Hello to="Sonny" from="Cher" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
