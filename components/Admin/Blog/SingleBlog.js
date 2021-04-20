import React from "react";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";

export default function SingleBlog(props) {
    return <AddBlog/>;
    // const {blogId} = props;
    // if (blogId === "1234") {
    //     return <AddBlog/>;
    // }
    // return <EditBlog blogId={blogId}/>;
}
