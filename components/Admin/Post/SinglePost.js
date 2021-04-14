import React from "react";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

export default function SinglePost(props) {
  const { postId } = props;
  if (postId !== "1234") {
    return <EditPost postId={postId} />;
  }
  return null;
}
