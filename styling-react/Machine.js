class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    const styles = {
      fontSize: "2rem",
      backgroundColor: "#e3caff",
      padding: "0.5rem"
    };
    return (
      <div className="Machine">
        <p style={styles}>
          {s1} {s2} {s3}
        </p>
        <p className={winner ? "Machine-winner" : "Machine-loser"}>
          {winner ? "You Win!" : "You lose!"}
        </p>
      </div>
    );
  }
}

/*
- React components can either be styled using classes that you toggle on or off, or using inline styles, referencing a styles object if needed.
- Remember to use className, since class is a reserved keyword in JavaScript.
- Inline styles are written in camelCase, e.g. {fontSize: "2rem"}.
- For multiple properties, you can save the styles object as a variable. 
- Styles can be dynamic, e.g. using a ternary operator to add a class.
*/
