import React from "react";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Button, Col, Row } from "antd";
import ContactForm from "@components/Guest/Contact/ContactForm";
import Subscription from "@components/Guest/Subscription";
import ContactSocialLinks from "@components/Common/ContactSocialLinks";
import AboutWrapper from "@components/Guest/About/About.styles";
import EditPost from "@components/Common/PostBlock/EditPost";
import Link from "next/link";
import BostonImage from "@assets/images/locations-boston.jpg";

function About(props) {
  const { posts } = props;
  return (
    <AboutWrapper>
      <Box as="section" className="main-background-2" />
      <Container className="check-boston-block">
        <Row gutter={[32, 32]}>
          <Col lg={12} sm={24} xs={24}>
            <EditPost index={44} size="lg" posts={posts} />
            <Link href="/locations#boston">
              <a className="ant-btn ant-btn-secondary ant-btn-lg">
                CHECK OUT BOSTON
              </a>
            </Link>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <div
              className="image-wrapper"
              style={{ backgroundImage: `url(${BostonImage})` }}
            />
          </Col>
        </Row>
      </Container>
      <Box as="section" className="press-block">
        <Container>
          <EditPost index={95} size="lg" posts={posts} />
          {/* <EditPost index={45} size="lg" posts={posts} /> */}
          <h2 className="text-blue">Our Team</h2>
          <p className="mb-5">
            Hello! We are small local team with diverse backgrounds, and
            lifetime residents of this amazing city so we have inside
            information and suggestions for your planned visit, short or long.
            Meet also the latest addition to our team, Cisco the bike rider, and
            follow his personal{" "}
            <a
              target="_blank"
              href={"//www.instagram.com/where.is.cisco/?hl=en"}
              className="instagram-link"
            >
              Instagram page
            </a>
          </p>
        </Container>
      </Box>
      <Container className="contact-info-block">
        <Row gutter={32}>
          <Col lg={12} sm={24} xs={24}>
            <h2>Contact us</h2>
            <p>
              We are available to answer questions and provide suggestions or
              connect you with some of our additional personalized services.
              Please contact us using the form or the contact details below:
            </p>
            <h5>(617)-855-9576 </h5>
            <p>info@starsofboston.com </p>
            <p>
              1583 Beacon Street
              <br />
              Brookline, MA 02446
              <br />
              USA
            </p>
            <ContactSocialLinks size={28} />
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Subscription />
    </AboutWrapper>
  );
}

export default About;
