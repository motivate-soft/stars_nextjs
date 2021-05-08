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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, pageSize]);

  async function fetchBlogs() {
    try {
      const query = {
        page: currentPage,
        page_size: pageSize,
      };
      const res = await blogApi.getListing(query);
      setTotalPage(Math.ceil(res.count / pageSize));
      setBlogs(res.results);
    } catch (error) {
      console.log("error", error);
    }
  }

  function handlePageChange(page) {
    console.log("handlePageChange", page);
    setCurrentPage(page);
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
                <div className={`blogs-list blogs-list--layout--${layout}`}>
                  <div className="blogs-list__body">{renderBlogLists()}</div>
                </div>
                <div className="blogs-view__pagination">
                  <Pagination
                    current={currentPage}
                    // siblings={2}
                    total={totalPage}
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
