import React from "react";
import PropTypes from "prop-types";
import BlogPost from "./BlogPost";
import WidgetSearch from "./../BlogList/WidgetSearch";
import WidgetTags from "./../BlogList/WidgetTags";
import Box from "@iso/ui/Box/Box";

import Container from "@iso/ui/UI/Container/Container";
import { Row, Col } from "antd";
import BlogDetailWrapper from "./BlogDetail.styles";

export default function BlogDetail(props) {
  const { blog } = props;
  let layout, sidebarPosition;
  layout = "full";

  let content;

  return (
    <>
      <Box as="section" className="main-background-2" />
      <BlogDetailWrapper>
        <Container>
          <Row>
            {/* <Col xs={12} lg={4}>
            <div className={`block block-sidebar block-sidebar--position--end`}>
              <div className="block-sidebar__item">
                <WidgetSearch />
              </div>
              <div className="block-sidebar__item">
                <WidgetTags />
              </div>
            </div>
          </Col> */}
            <Col xs={24} lg={{ span: 16, offset: 4 }}>
              <BlogPost layout={layout} blog={blog} />
            </Col>
          </Row>
        </Container>
      </BlogDetailWrapper>
      <Box />
    </>
  );
}
