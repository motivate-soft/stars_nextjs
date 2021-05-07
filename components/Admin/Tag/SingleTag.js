import React from "react";
import AddTag from "./AddTag";
import EditTag from "./EditTag";

export default function SingleTag(props) {
  const { tagId } = props;
  if (tagId === "new") {
    return <AddTag />;
  }
  return <EditTag tagId={tagId} />;
}
