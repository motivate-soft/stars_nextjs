import React, { useContext, useState, useEffect } from "react";
import HomeBanner from "@components/Guest/Home/Search/HomeBanner";
import Container from "@iso/ui/UI/Container/Container";
import Link from "next/link";
import room1 from "@iso/assets/images/room1.jpg";
import room2 from "@iso/assets/images/room2.jpg";
import room3 from "@iso/assets/images/room3.jpg";
import { Button, Col, Row } from "antd";
import doctor from "@iso/assets/images/doctor.jpg";
import family from "@iso/assets/images/family.jpg";
import dining from "@iso/assets/images/dining.jpg";

import icon1 from "@iso/assets/images/icon/icons_1.svg";
import icon2 from "@iso/assets/images/icon/icons_2.svg";
import icon3 from "@iso/assets/images/icon/icons_3.svg";
import icon4 from "@iso/assets/images/icon/icons_4.svg";
import icon5 from "@iso/assets/images/icon/icons_5.svg";
import icon6 from "@iso/assets/images/icon/icons_6.svg";
import icon7 from "@iso/assets/images/icon/icons_7.svg";
import icon8 from "@iso/assets/images/icon/icons_8.svg";
import icon9 from "@iso/assets/images/icon/icons_9.svg";
import icon10 from "@iso/assets/images/icon/icons_10.svg";

import stayinboston from "@iso/assets/images/stayinboston.jpg";

import BostonImage from "@iso/assets/images/location_boston.jpg";
import BrooklineImage from "@iso/assets/images/location_brookline.jpg";
import CambridgeImage from "@iso/assets/images/location_cambridge.jpg";
import QuincyImage from "@iso/assets/images/location_quincy.jpg";

import HomeWrapper from "@components/Guest/Home/Home.styles";
import Box from "@iso/ui/Box/Box";
import { FaStar } from "react-icons/fa";
import EditPost from "@components/Common/PostBlock/EditPost";
import GuestReviews from "@components/Guest/Review/GuestReview";
import PropertyCard from "./../Property/PropertyCard/PropertyCard";
import { SearchContext } from "@context/SearchProvider";
import Router from "next/router";
import propertyApi from "./../../../service/propertyApi";
import Subscription from "@components/Guest/Subscription";

function Home({ posts }) {
  const { state, dispatch } = useContext(SearchContext);
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    let queryObj = { category: "1-Bedroom" };
    try {
      const res = await propertyApi.getListing(queryObj);
      setProperties(res);
    } catch (error) {
      console.log("error", error);
      setProperties([]);
    }
  }

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
        <Container className="vip-services-block">
          <Row gutter={[32, 32]}>
            <Col lg={{ span: 22, offset: 2 }} sm={24} xs={24}>
              <h3>VIP Services</h3>
            </Col>
            <Col lg={{ span: 10, offset: 2 }} sm={24} xs={24}>
              <Row>
                <Col lg={10} sm={24} xs={24}>
                  <img className="stars-icon" src={icon7} alt="icon" />
                </Col>
                <Col lg={14} sm={24} xs={24}>
                  <EditPost index={11} posts={posts} size="sm" />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 10, offset: 2 }} sm={24} xs={24}>
              <Row>
                <Col lg={10} sm={24} xs={24}>
                  <img className="stars-icon" src={icon8} alt="icon" />
                </Col>
                <Col lg={14} sm={24} xs={24}>
                  <EditPost index={12} posts={posts} size="sm" />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 10, offset: 2 }} sm={24} xs={24}>
              <Row>
                <Col lg={10} sm={24} xs={24}>
                  <img className="stars-icon" src={icon9} alt="icon" />
                </Col>
                <Col lg={14} sm={24} xs={24}>
                  <EditPost index={13} posts={posts} size="sm" />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 10, offset: 2 }} sm={24} xs={24}>
              <Row>
                <Col lg={10} sm={24} xs={24}>
                  <img className="stars-icon" src={icon10} alt="icon" />
                </Col>
                <Col lg={14} sm={24} xs={24}>
                  <EditPost index={14} posts={posts} size="sm" />
                </Col>
              </Row>
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
      <Box as="section" className="look-rentals-block">
        <Container>
          <div class="title-wrapper">
            <div>
              <p>FIND YOUR IDEAL STAY</p>
              <h2>Take a look at our rentals</h2>
            </div>
            <Link href="/listing">
              <a className="ant-btn ant-btn-secondary ant-btn-lg">Read More</a>
            </Link>
          </div>
          <Row gutter={[32, 32]}>
            {properties &&
              properties.map((item, index) => (
                <Col key={index} lg={8} sm={24} xs={24}>
                  <PropertyCard
                    key={index}
                    id={item.id}
                    address={item.address}
                    title={item.name}
                    slug={item.slug}
                    price={item.price}
                    minPrice={item.min_price}
                    maxPrice={item.max_price}
                    minMonthPrice={item.min_month_price}
                    bedroomCount={item.bedroom_count}
                    bathroomCount={item.bathroom_count}
                    sharedBathroom={item.shared_bathroom}
                    minSleeps={item.min_sleeps}
                    sleeps={item.sleeps}
                    rentalParking={item.rental_parking}
                    furnished={item.furnished}
                    petsConsidered={item.pets_considered}
                    image={item.featured_img}
                  />
                </Col>
              ))}
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
