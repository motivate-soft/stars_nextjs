import React from "react";
import Container from "@iso/ui/UI/Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import { BannerWrapper, SearchWrapper } from "./Home.styles";
import Link from "next/link";
import EditPost from "@components/Common/PostBlock/EditPost";

const HomeBanner = ({ posts }) => {
  return (
    <BannerWrapper>
      <Container>
        <SearchWrapper>
          <EditPost index={93} posts={posts} size="xlg" />
          <SearchForm />
          <h6>
            Please <Link href="/contact">Contact us</Link> for best rates for
            long-term stays of 28 nights or more
          </h6>
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

export default HomeBanner;
