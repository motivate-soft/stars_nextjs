import React from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

export default function SingleCategory(props) {
  const { categoryId } = props;
  if (categoryId !== "1234") {
    return <EditCategory categoryId={categoryId} />;
  }
  return <AddCategory />;
}
