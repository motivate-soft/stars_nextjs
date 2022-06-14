import React from "react";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import EditPost from "@components/Common/PostBlock/EditPost";
import { OthersWrapper } from './Others.styles';
function CookiePolicy({ posts }) {
  return (
    <>
    <OthersWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="posts-block">
        <Container>
          <h1>Cookie Policy</h1>
          <EditPost content index={94} posts={posts} />
        </Container>
      </Box>
      </OthersWrapper>
    </>
  );
}

export default CookiePolicy;
