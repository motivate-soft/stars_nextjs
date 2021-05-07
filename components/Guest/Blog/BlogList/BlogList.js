import React from "react";
import postsData from "./postsData";
import BlogCard from "./../BlogCard/BlogCard";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import Posts from "./../../../../shared/containers/Profile/Posts/Posts";
import blogApi from "./../../../../service/blogApi";

function BlogList(props) {
  let layout = "grid";
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const res = await blogApi.getAll();
      setBlogs(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  const postsList = blogs.map((post) => {
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
          </div>
        </div>
      </Container>
    </>
  );
}

export default BlogList;
