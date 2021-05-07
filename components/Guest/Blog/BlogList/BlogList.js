import React, { useEffect, useState } from "react";
import BlogCard from "./../BlogCard/BlogCard";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import blogApi from "./../../../../service/blogApi";
import Pagination from "./Pagination";
import { Row, Col } from "antd";
import WidgetSearch from "./WidgetSearch";
import WidgetTags from "./WidgetTags";
import BlogListWrapper from "./BlogList.styles";

function BlogList(props) {
  const layout = "list";

  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(null);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [current]);

  async function fetchBlogs() {
    try {
      const res = await blogApi.getListing();
      setTotal(res.count);
      setBlogs(res.results);
    } catch (error) {
      console.log("error", error);
    }
  }

  function handlePageChange(page) {
    setCurrent(page);
  }

  function renderBlogLists() {
    if (blogs) {
      return (
        <>
          {blogs.map((blog) => {
            const postLayout = {
              classic: "grid-lg",
              grid: "grid-nl",
              list: "list-nl",
            }[layout];

            return (
              <div key={blog.id} className="blogs-list__item">
                <BlogCard post={blog} layout={postLayout} />
              </div>
            );
          })}
        </>
      );
    }
  }

  return (
    <>
      <Box as="section" className="main-background-2" />
      <Container>
        <BlogListWrapper>
          <Row>
            <Col span={24} lg={16}>
              <div className="block">
                <div
                  className={`blogs-list blogs-list--layout--${layout}`}
                >
                  <div className="blogs-list__body">{renderBlogLists()}</div>
                </div>
                <div className="blogs-view__pagination">
                  <Pagination
                    current={current}
                    siblings={2}
                    total={total}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </Col>
            <Col span={24} lg={8}>
              <div
                className={`block block-sidebar block-sidebar--position--end`}
              >
                <div className="block-sidebar__item">
                  <WidgetSearch />
                </div>
                <div className="block-sidebar__item">
                  <WidgetTags />
                </div>
              </div>
            </Col>
          </Row>
        </BlogListWrapper>
      </Container>
    </>
  );
}

export default BlogList;
