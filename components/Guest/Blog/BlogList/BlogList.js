import React from "react";
import postsData from "./postsData";
import BlogCard from "./../BlogCard/BlogCard";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";

function BlogList(props) {
  let layout = "grid";

  const postsList = postsData.map((post) => {
    const postLayout = {
      classic: "grid-lg",
      grid: "grid-nl",
      list: "list-nl",
    }[layout];

    return (
      <div key={post.id} className="posts-list__item">
        <BlogCard post={post} layout={postLayout} />
      </div>
    );
  });

  return (
    <>
      <Box as="section" className="main-background-2" />
      <Container>
        <div className="block">
          <div className="posts-view">
            <div
              className={`posts-view__list posts-list posts-list--layout--${layout}`}
            >
              <div className="posts-list__body">{postsList}</div>
            </div>
            {/* <div className="posts-view__pagination">
          <Pagination
            current={page}
            siblings={2}
            total={10}
            onPageChange={this.handlePageChange}
          />
        </div> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BlogList;
