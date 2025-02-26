// IMPORT PostCard.jsx
import Postcard from "./PostCard";
// IMPORT Contexts
import { useContext } from "react";
import PostContext from "../../contexts/PostContext";

export default function Postlist() {
  const { post } = useContext(PostContext);

  return (
    <>
      <h3>Lista dei Posts</h3>
      {post.map((post) => (
        <Postcard key={post.id} post={post} />
      ))}
    </>
  );
}
