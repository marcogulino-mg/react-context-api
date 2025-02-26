export default function Postcard(props) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <img src={post.image} alt={post.title} />
    </>
  );
}
