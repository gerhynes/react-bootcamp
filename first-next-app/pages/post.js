const Post = ({ id }) => <h1>You are looking at post #{id}</h1>;

Post.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
export default Post;
