import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@iso/ui/Box/Box";
import LocationsWrapper from "@components/Guest/Locations/Locations.styles";
import { Button, Col, Row } from "antd";

import imgBoston from "@assets/images/locations-boston.jpg";
import imgBrookline from "@assets/images/locations-brookline.jpg";
import imgCambridge from "@assets/images/locations-cambridge.jpg";
import imgQuincy from "@assets/images/locations-quincy.jpg";
import EditPost from "@components/Common/PostBlock/EditPost";
import Container from "@iso/ui/UI/Container/Container";
import Link from "next/link";

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
  const router = useRouter();

  useEffect(() => {
    console.log("asPath changed", router, window.location.hash.slice(1));
    if (router.asPath) {
      // let elem = document.getElementById(window.location.hash.slice(1));
      // if (elem) {
      //   const elemId = window.location.hash.slice(1);
      //   const yOffset = 100;
      //   const element = document.getElementById(elemId);
      //   const y =
      //     element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      //   console.log("const y", y);
      //   window.scrollTo({ top: y, behavior: "smooth" });
      // }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <LocationsWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="locations-block">
        <Container>
          <h2>Our Locations</h2>
          <Row gutter={[32, 32]} style={{ marginBottom: 50 }}>
            {locationsMenu.map((menuItem, index) => (
              <Col lg={6} sm={12} xs={24}>
                <Link href={`/locations#${menuItem.target}`}>
                  <a className="ant-btn ant-btn-secondary ant-btn-lg">
                    {menuItem.name}
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
          <Row id="boston" gutter={32}>
            <Col lg={12} sm={24} xs={24}>
              <img src={imgBoston} alt="boston" />
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <EditPost index={31} posts={posts} />
            </Col>
          </Row>
          <Row id="brookline" gutter={32}>
            <Col lg={12} sm={24} xs={24}>
              <EditPost index={32} posts={posts} />
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <img src={imgBrookline} alt="brookline" />
            </Col>
          </Row>
          <Row id="cambridge" gutter={32}>
            <Col lg={12} sm={24} xs={24}>
              <img src={imgCambridge} alt="cambridge" />
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <EditPost index={33} posts={posts} />
            </Col>
          </Row>
          <Row id="quincy" gutter={32}>
            <Col lg={12} sm={24} xs={24}>
              <EditPost index={34} posts={posts} />
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <img src={imgQuincy} alt="quincy" />
            </Col>
          </Row>
        </Container>
      </Box>
    </LocationsWrapper>
  );
}

export default Locations;
