import React from "react";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";

export default function SingleBlog(props) {
  const { blogId } = props;
  if (blogId === "new") {
    return <AddBlog />;
  }
  return <EditBlog blogId={blogId} />;
}
