import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { palette } from "styled-theme";

const SeoButtonWrapper = styled.div`
  position: fixed;
  z-index: 9000;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  cursor: pointer;
  background-color: ${palette("primary", 0)};
  border-radius: 3px 0 0 3px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  color: #ffffff;
`;

export default function SeoButton() {
  const router = useRouter();

  function handleClick() {
    let pageSlug;
    if (router.pathname) {
      if (router.pathname == "/") {
        pageSlug = "home";
      } else {
        const array = router.asPath.split("/");
        pageSlug = array[array.length - 1];
      }
    }
    router.push(`/admin/meta?slug=${pageSlug}`);
  }

  return (
    <SeoButtonWrapper onClick={handleClick}>
      <span>SEO</span>
    </SeoButtonWrapper>
  );
}
