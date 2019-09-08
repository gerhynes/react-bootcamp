import Link from "next/Link";
const Navbar = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    background: "grey",
    color: "#fff",
    padding: "1rem"
  };
  return (
    <nav style={styles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
