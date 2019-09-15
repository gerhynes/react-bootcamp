class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" bangs={4} img="https://images.unsplash.com/photo-1558879177-69cde6b279c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"/>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
