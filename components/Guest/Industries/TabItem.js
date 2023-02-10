import React from "react";
import styled from "styled-components";
import { palette } from "styled-tools";

const TabItemWrapper = styled.div`
  margin-top: 0;
  h1,
  h2,
  h4,
  h5 {
    color: ${palette("primary", 0)};
    margin-top: 0;
    margin-bottom: 16px;
  }

  a {
    display: block;
    margin-bottom: 20px;
  }
`;

function TabItem(props) {
  const { title, content } = props;

  return (
    <TabItemWrapper>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </TabItemWrapper>
  );
}

export default TabItem;
