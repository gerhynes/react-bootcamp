import Link from "next/Link";
const Index = () => {
  console.log("*********RUNNING INDEX COMPONENT********");
  return (
    <div>
      <h1>Our Index Page</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </div>
  );
};

export default Index;
