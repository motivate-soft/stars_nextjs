import React from "react";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Row, Col } from "antd";

import EditMeta from "./EditMeta";
import AddMeta from "./AddMeta.";
import { SingeMetaWrapper } from "./Meta.styles";

export default function SingleMeta(props) {
  const { metaId } = props;
  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 16, offset: 4 }} sm={24}>
            <SingeMetaWrapper>
              {metaId === "new" ? <AddMeta /> : <EditMeta metaId={metaId} />}
            </SingeMetaWrapper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
