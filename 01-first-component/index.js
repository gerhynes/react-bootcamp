// Class-based component
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h1>Hello There</h1>
        <h1>Hi!</h1>
      </div>
    );
  }
}

// Function component
// function Hello() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <h1>Hello There</h1>
//       <h1>Hi!</h1>
//     </div>
//   );
// }

ReactDOM.render(<Hello />, document.getElementById("root"));
