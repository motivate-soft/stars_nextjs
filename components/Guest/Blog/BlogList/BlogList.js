import PropTypes from "prop-types";
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
import Loader from "@iso/components/utility/loader";

function BlogList() {
  const layout = "list";

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [blogs, setBlogs] = useState(null);

  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState(null);


  useEffect(() => {
    fetchBlogs();
  }, [currentPage, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
    setPageSize(10);
    fetchBlogs();
  }, [tags]);

  async function fetchBlogs() {
    setLoading(true);
    try {
      let query;
      query = {
        page: currentPage,
        page_size: pageSize,
      };

      if (tags) {
        const tagsString = tags.reduce(
          (total, value, index, array) => (total = total + "," + value)
        );
        console.log("tagsString", tags, tagsString);
        query.tags = tagsString;
      }

      const res = await blogApi.getListing(query);

      setTotalPage(Math.ceil(res.count / pageSize));
      console.log(
        "setTotalPage",
        res,
        pageSize,
        Math.ceil(res.count / pageSize)
      );
      setLoading(false);
      setBlogs(res.results);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  }

  function handleChangeTags(values) {
    console.log("BlogList:handleChangeTags", values);
    setTags(values);
  }

  function handlePageChange(page) {
    console.log("BlogList:handlePageChange", page);
    setCurrentPage(page);
  }

  function renderBlogLists() {
    if (loading) return <Loader />;

    if (blogs) {
      if (blogs.length === 0)
        return (
          <>
            <h5>No blogs found</h5>
          </>
        );

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
                  {blogs && blogs.length > 0 && (
                    <Pagination
                      current={currentPage}
                      siblings={2}
                      total={totalPage}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            </Col>
            <Col span={24} lg={8}>
              <div
                className={`block block-sidebar block-sidebar--position--end`}
              >
                {/* <div className="block-sidebar__item">
                  <WidgetSearch
                    search={search}
                    onChangeSearch={handleChangeSearch}
                  />
                </div> */}
                <div className="block-sidebar__item">
                  <WidgetTags tags={tags} onChangeTags={handleChangeTags} />
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
