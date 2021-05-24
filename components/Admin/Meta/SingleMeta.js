import React, { useEffect, useState } from "react";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Row, Col } from "antd";

import EditMeta from "./EditMeta";
import AddMeta from "./AddMeta.";
import { SingeMetaWrapper } from "./Meta.styles";
import Loader from "@iso/components/utility/loader";
import metaApi from "./../../../service/metaApi";

export default function SingleMeta(props) {
  const { slug } = props;
  const [isSlugValid, setIsSlugValid] = useState(null);

  // check meta object with metaId exists
  useEffect(() => {
    fetchMetaBySlug();
  }, []);

  async function fetchMetaBySlug() {
    try {
      await metaApi.getOne(slug);
      setIsSlugValid(true);
    } catch (error) {
      setIsSlugValid(false);
      console.log("error", error);
    }
  }

  if (isSlugValid === null) return <Loader />;

  return (
    <Box>
      <Container>
        <Row>
          <Col lg={{ span: 16, offset: 4 }} sm={24}>
            <SingeMetaWrapper>
              {isSlugValid ? <EditMeta slug={slug} /> : <AddMeta slug={slug} />}
            </SingeMetaWrapper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
