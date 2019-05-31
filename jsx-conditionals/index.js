function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>Congrats you win!</h2>
          <img
            src="https://media.giphy.com/media/ckeHl52mNtoq87veET/giphy.gif"
            alt=""
          />
        </div>
      );
    } else {
      msg = "Sorry, you lose.";
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));

// Three common patterns
// 1. Ternary operator
// 2. Boolean &&
// 3. Conditional variable
