class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
        <Friend name="Alison" hobbies={["Art", "Interpretive Dance", "Python"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
