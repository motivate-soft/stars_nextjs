import React from "react";
import Box from "@iso/ui/Box/Box";
import LocationsWrapper from "@components/Guest/Locations/Locations.styles";
import { Col, Row } from "antd";
import { Element, Link } from "react-scroll";

import imgBoston from "@assets/images/locations-boston.jpg";
import imgBrookline from "@assets/images/locations-brookline.jpg";
import imgCambridge from "@assets/images/locations-cambridge.jpg";
import imgQuincy from "@assets/images/locations-quincy.jpg";
import EditPost from "@components/Common/PostBlock/EditPost";
import Container from "@iso/ui/UI/Container/Container";

const locationsMenu = [
  {
    name: "Boston",
    target: "boston",
  },
  {
    name: "Brookline",
    target: "brookline",
  },
  {
    name: "Cambridge",
    target: "cambridge",
  },
  {
    name: "Quincy",
    target: "quincy",
  },
];

function Locations(props) {
  const { posts } = props;

  return (
    <LocationsWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="locations-block">
        <Container>
          <h2>Our Locations</h2>
          <Row gutter={[32, 32]} style={{ marginBottom: 50 }}>
            {locationsMenu.map((menuItem, index) => (
              <Col lg={6} sm={12} xs={24}>
                <Link
                  key={menuItem.target}
                  activeClass="active"
                  className="ant-btn ant-btn-secondary ant-btn-lg"
                  to={menuItem.target}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-170}
                  duration={600}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  {menuItem.name}
                </Link>
              </Col>
            ))}
          </Row>
          <Element name="boston" className="location">
            <Row gutter={32}>
              <Col lg={12} sm={24} xs={24}>
                <img src={imgBoston} alt="boston" />
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <EditPost index={31} posts={posts} />
              </Col>
            </Row>
          </Element>
          <Element name="brookline" className="location">
            <Row gutter={32}>
              <Col lg={12} sm={24} xs={24}>
                <EditPost index={32} posts={posts} />
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <img src={imgBrookline} alt="brookline" />
              </Col>
            </Row>
          </Element>
          <Element name="cambridge" className="location">
            <Row gutter={32}>
              <Col lg={12} sm={24} xs={24}>
                <img src={imgCambridge} alt="cambridge" />
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <EditPost index={33} posts={posts} />
              </Col>
            </Row>
          </Element>
          <Element name="quincy" className="location">
            <Row gutter={32}>
              <Col lg={12} sm={24} xs={24}>
                <EditPost index={34} posts={posts} />
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <img src={imgQuincy} alt="quincy" />
              </Col>
            </Row>
          </Element>
        </Container>
      </Box>
    </LocationsWrapper>
  );
}

export default Locations;
