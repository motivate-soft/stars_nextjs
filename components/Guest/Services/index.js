import React from "react";
import Box from "@iso/ui/Box/Box";
import ServiceWrapper from "@components/Guest/Services/Services.styles";
import Container from "@iso/ui/UI/Container/Container";
import { Col, Row } from "antd";
import EditPost from "@components/Common/PostBlock/EditPost";
import icon7 from "@assets/icons/icons_7.svg";
import icon8 from "@assets/icons/icons_8.svg";
import icon9 from "@assets/icons/icons_9.svg";
import icon10 from "@assets/icons/icons_10.svg";
import { Element } from "react-scroll";
import imgTrollyTour from "@assets/images/TrolleyTourThumbnail.jpeg";
import gotoCity from "@assets/images/GoCityThumbnail.jpeg";
import rinseThumb from "@assets/images/RinseThumbnail.jpeg";
import TyeDied from "@assets/images/TyeDyedThumbnail.png";

import Link from "next/link";
const servicesPost = [
    {
        id:0,
        title:"RINSE Laundry Service",
        text:"<p>Have dry cleaning or laundry to do, and want it taken care of for you?</p><p>Well, STARS of Boston has partnered with Rinse to provide you with a top-notch laundry pick-up and drop-off service right to your door!</p> <p>Schedule a pickup 7 days a week, and enjoy your extra free time while your belongings are washed, folded, and delivered!</p><p>Exclusively for our value guests, simply sign up using the link below and receive a $50 Rinse credit ($10 off your first 5 orders) automatically applied to your new account.</p>"
    
    },
    {
        id:1,
        title:"GoCity",
        text:"<p>See the best of Boston with Go City. The passes give sightseers the freedom to do what they want, when they want, whilst enjoying incredible savings.</p><p>With Go City passes, you can say goodbye to multiple entry fees and paper tickets. One price, one pass, and everything you need, right there on your phone. Simply choose where you want to go, show your pass, and you’re all set.</p><p> The passes include top attractions, such as the New England Aquarium and the Museum of Fine Arts, as well as many of Boston's hidden gems, all handpicked by local experts. There's no need to plan in advance, your trip is in your hands!</p> "
    },
    {
        id:2,
        title:"Historic Tours",
        text:"<p>Boston’s Best Hop-On, Hop-Off All Day Tour!</p><p>Enjoy the best views, while riding high above it all on a state-of-the-art stadium trolley.</p><p>Take advantage of frequent service between 18 convenient stops. Make use of a custom easy-to-use interactive map, to help you maximize your Trolley Tour experience, so you won’t miss all the excitement that Boston has to offer! And, since it works great on mobile devices, you'll have all the information you need during your trip, right in your pocket.</p>"
    },
    {
        id:3,
        title:"Tye Dyed Tour Guide",
        text:"<p>Book a fun and unique tour around Boston from a local who has been doing it for 10 years! Truly experience what it is like to be a Bostonian, with your own personal knowledgeable Bostonian guide, to learn about Paul Revere, the History that is built into the walls of every Pizza Place in Town, and more!</p><p>Enter code STARS at check out for 10% off!</p>"
    }
]
function Services(props) {
    const { posts } = props;
    return (
        <ServiceWrapper>
            <Box as="section" className="main-background-2" />
            <Box as="section" className="services-block">
                <Container>
                    <h1>Our Services</h1>
                </Container>
            </Box>
            <Box as="section" className="vip-services-block">
                <Container>
                    <Col lg={24} sm={24} xs={24}>
                        <h3>VIP Services</h3>
                    </Col>
                    <Row gutter={[32, 32]}>
                        <Col lg={{ span: 10, offset: 0 }} sm={24} xs={24}>
                            <Row>
                                <Col lg={10} sm={24} xs={24}>
                                    <img className="stars-icon" src={icon7} alt="icon" />
                                </Col>
                                <Col lg={14} sm={24} xs={24}>
                                    <EditPost index={11} posts={posts} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 10, offset: 4}} sm={24} xs={24}>
                            <Row>
                                <Col lg={10} sm={24} xs={24}>
                                    <img className="stars-icon" src={icon8} alt="icon" />
                                </Col>
                                <Col lg={14} sm={24} xs={24}>
                                    <EditPost index={12} posts={posts} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 10, offset: 0 }} sm={24} xs={24}>
                            <Row>
                                <Col lg={10} sm={24} xs={24}>
                                    <img className="stars-icon" src={icon9} alt="icon" />
                                </Col>
                                <Col lg={14} sm={24} xs={24}>
                                    <EditPost index={13} posts={posts} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 10, offset: 4 }} sm={24} xs={24}>
                            <Row>
                                <Col lg={10} sm={24} xs={24}>
                                    <img className="stars-icon" src={icon10} alt="icon" />
                                </Col>
                                <Col lg={14} sm={24} xs={24}>
                                    <EditPost index={14} posts={posts} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Box>
            <Box as="section" className="arti-services-block">
                <Container>
                    <h3>Affiliate Services</h3>
                    <Element name="boston" className="arti-service-block">
                        <Row gutter={[32,32]}>
                            <Col lg={12} sm={24} xs={24}>
                                <img src={rinseThumb} alt="Rinse" />
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <EditPost index={0} posts={servicesPost}/>
                                <Link href="https://rinse.com/starsofboston">
                                    <a className="ant-btn ant-btn-secondary ant-btn-lg">
                                    View More
                                    </a>
                                </Link>
                            </Col>
                            
                        </Row>
                    </Element>
                    <Element name="brookline" className="arti-service-block">
                        <Row gutter={32}>
                            <Col lg={12} sm={24} xs={24}>
                                <EditPost index={1} posts={servicesPost} />
                                <Link href="https://prf.hn/click/camref:1101lpefz/destination:https%3A%2F%2Fgocity.com%2Fboston%2Fen-us">
                                    <a className="ant-btn ant-btn-secondary ant-btn-lg">
                                    View More
                                    </a>
                                </Link>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <img src={gotoCity} alt="gotoCity" />
                            </Col>
                        </Row>
                    </Element>
                    <Element name="cambridge" className="arti-service-block">
                        <Row gutter={32}>
                            <Col lg={12} sm={24} xs={24}>
                                <img src={imgTrollyTour} alt="imgTrollyTour" />
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <EditPost index={2} posts={servicesPost} />
                                <Link href="http://trolleytix.com/1487">
                                    <a className="ant-btn ant-btn-secondary ant-btn-lg">
                                    View More
                                    </a>
                                </Link>
                            </Col>
                        </Row>
                    </Element>
                    <Element name="quincy" className="arti-service-block">
                        <Row gutter={32}>
                            <Col lg={12} sm={24} xs={24}>
                                <EditPost index={3} posts={servicesPost} />
                                <Link href="https://tyedyedtourguide.com/">
                                    <a className="ant-btn ant-btn-secondary ant-btn-lg">
                                    View More
                                    </a>
                                </Link>
                            </Col>
                            <Col lg={12} sm={24} xs={24}>
                                <img src={TyeDied} alt="TyeDied" />
                            </Col>
                        </Row>
                    </Element>
                </Container>

            </Box>
            
        </ServiceWrapper>
    )
}

export default Services;