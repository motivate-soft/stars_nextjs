import React from "react";
import HomeBanner from "@components/Guest/Home/HomeBanner";
import Container from "@iso/ui/UI/Container/Container";
import Link from "next/link";
import room1 from "@assets/images/room1.jpg";
import room2 from "@assets/images/room2.jpg";
import room3 from "@assets/images/room3.jpg";
import { Col, Row } from "antd";
import doctor from "@assets/images/doctor.jpg";
import family from "@assets/images/family.jpg";
import dining from "@assets/images/dining.jpg";

import icon1 from "@assets/icons/icons_1.svg";
import icon2 from "@assets/icons/icons_2.svg";
import icon3 from "@assets/icons/icons_3.svg";
import icon4 from "@assets/icons/icons_4.svg";
import icon5 from "@assets/icons/icons_5.svg";
import icon6 from "@assets/icons/icons_6.svg";

import stayinboston from "@assets/images/stayinboston.jpg";

import BostonImage from "@assets/images/location_boston.jpg";
import BrooklineImage from "@assets/images/location_brookline.jpg";
import CambridgeImage from "@assets/images/location_cambridge.jpg";
import QuincyImage from "@assets/images/location_quincy.jpg";

import { HomeWrapper } from "@components/Guest/Home/Home.styles";
import Box from "@iso/ui/Box/Box";
import { FaStar } from "react-icons/fa";
import EditPost from "@components/Common/PostBlock/EditPost";
import GuestReviews from "@components/Guest/Review/GuestReview";
import Subscription from "@components/Guest/Subscription";
import Companies from "../Companies";

function Home({ posts, companies }) {
  return (
    <HomeWrapper>
      <HomeBanner posts={posts} />
      <Box as="section" className="rental-solution-block">
        <Container>
          <EditPost index={0} posts={posts} size="lg" />
          <Row gutter={[32, 32]}>
            <Col lg={8} sm={24} xs={24}>
              <div className="solution-card">
                <img src={room1} alt="private rooom" />
                <div className="solution-content">
                  <EditPost index={1} posts={posts} />
                  <a
                    className="ant-btn ant-btn-secondary ant-btn-lg"
                    href="/listing?category=private-rooms"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="solution-card">
                <img src={room2} alt="apartments" />
                <div className="solution-content">
                  <EditPost index={2} posts={posts} />
                  <a
                    className="ant-btn ant-btn-secondary ant-btn-lg"
                    href="/listing?category=studios"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="solution-card">
                <img src={room3} alt="homes" />
                <div className="solution-content">
                  <EditPost index={3} posts={posts} />
                  <a
                    className="ant-btn ant-btn-secondary ant-btn-lg"
                    href="/listing?category=3-bedrooms"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box as="section" className="medical-travel-block">
        <Container>
          <EditPost index={29} posts={posts} size="lg" title />
          <Row gutter={[32, 32]}>
            <Col lg={12} sm={24} xs={24}>
              <img src={doctor} alt="medical" />
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <div className="texts-block">
                <EditPost index={29} posts={posts} content />
                <Link href="/listing">
                  <a className="ant-btn ant-btn-secondary ant-btn-lg">
                    Explore Our Apartments
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box as="section" className="insurance-block">
        <Container>
          <Row gutter={[32, 32]}>
            <Col lg={12} sm={24} xs={24}>
              <img src={family} alt="family" />
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <div className="texts-block">
                <EditPost index={92} posts={posts} size="lg" />
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box as="section" className="corporate-housing-block">
        <Container>
          <Row gutter={[32, 32]}>
            <Col lg={10} sm={24} xs={24}>
              <EditPost index={4} posts={posts} size="lg" />
              <Link href="/listing">
                <a className="ant-btn ant-btn-secondary ant-btn-lg">
                  Read more
                </a>
              </Link>
            </Col>
            <Col lg={14} sm={24} xs={24}>
              <img src={dining} alt="family" />
            </Col>
          </Row>
        </Container>
      </Box>
      <Box as="section" className="stars-background">
        <Container className="stars-experience-block">
          <h2>The STARS Experience</h2>
          <Row gutter={32}>
            <Col lg={8} sm={24} xs={24}>
              <div className="stars-item">
                <img className="stars-icon" src={icon1} alt="icon" />
                <EditPost index={5} posts={posts} />
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="stars-item">
                <img className="stars-icon" src={icon2} alt="icon" />
                <EditPost index={6} posts={posts} />
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="stars-item">
                <img className="stars-icon" src={icon3} alt="icon" />
                <EditPost index={7} posts={posts} />
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="stars-item">
                <img className="stars-icon" src={icon4} alt="icon" />
                <EditPost index={8} posts={posts} />
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="stars-item">
                <img className="stars-icon" src={icon5} alt="icon" />
                <EditPost index={9} posts={posts} />
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="stars-item">
                <img className="stars-icon" src={icon6} alt="icon" />
                <EditPost index={10} posts={posts} />
              </div>
            </Col>
          </Row>
        </Container>
        
      </Box>
      <Box as="section" className="stay-boston-block">
        <Container>
          <Row gutter={[32, 32]}>
            <Col lg={12} sm={12} xs={24}>
              <h2>Your Stay in Boston Simplified</h2>
              <Row gutter={24}>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={15} posts={posts} title />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={21} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={16} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={22} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={17} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={23} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={18} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={24} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={19} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={25} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={20} posts={posts} />
                  </div>
                </Col>
                <Col lg={12} sm={12} xs={24}>
                  <div className="stay-feature-item">
                    <FaStar />
                    <EditPost index={26} posts={posts} />
                  </div>
                </Col>
                <Link href="/about">
                  <a className="ant-btn ant-btn-secondary ant-btn-lg">
                    More about us
                  </a>
                </Link>
              </Row>
            </Col>
            <Col lg={12} sm={12}>
              <img src={stayinboston} alt="stayinboston" />
            </Col>
          </Row>
        </Container>
      </Box>
      <Box as="section" className="companies-block">
        <Companies companies={companies} />
      </Box>
      <Box as="section" className="explore-locations-block">
        <Container>
          <h2>Explore Our Locations</h2>
          <Row gutter={[32, 32]}>
            <Col lg={6} md={6} xs={24}>
              <div className="location-card my-3 mx-auto">
                <div
                  className="bg-box"
                  style={{ backgroundImage: `url(${BostonImage})` }}
                />
                <Link href={`/locations#boston`}>
                  <a>Boston</a>
                </Link>
              </div>
            </Col>
            <Col lg={6} md={6} xs={24}>
              <div className="location-card my-3 mx-auto">
                <div
                  className="bg-box"
                  style={{ backgroundImage: `url(${BrooklineImage})` }}
                />
                <Link href={`/locations#brookline`}>
                  <a>Brookline</a>
                </Link>
              </div>
            </Col>
            <Col lg={6} md={6} xs={24}>
              <div className="location-card my-3 mx-auto">
                <div
                  className="bg-box"
                  style={{ backgroundImage: `url(${CambridgeImage})` }}
                />
                <Link href={`/locations#cambridge`}>
                  <a>Cambridge</a>
                </Link>
              </div>
            </Col>
            <Col lg={6} md={6} xs={24}>
              <div className="location-card my-3 mx-auto">
                <div
                  className="bg-box"
                  style={{ backgroundImage: `url(${QuincyImage})` }}
                />
                <Link href={`/locations#quincy`}>
                  <a>Quincy</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box as="section" className="reviews-block">
        <GuestReviews posts={posts} />
      </Box>
      <Subscription />
    </HomeWrapper>
  );
}

export default Home;
