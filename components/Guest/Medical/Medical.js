import React, {useEffect, useState} from 'react'
import Box from "@iso/ui/Box/Box";
import {Button, Col, Row} from "antd";
import Link from 'next/link'


import MedicalImage from '@iso/assets/images/medical.jpg';
import CorporateImage from '@iso/assets/images/corporate.jpg';
import iconHospital from '@iso/assets/images/icon/icon_hospital.png';
import iconKit from '@iso/assets/images/icon/icon_kit.png';
import iconHand from '@iso/assets/images/icon/icon_hand.png';
import iconCalendar from '@iso/assets/images/icon/icon_calendar.png';
import iconWorkspace from '@iso/assets/images/icon/icon_workspace.png';
import iconService from '@iso/assets/images/icon/icon_service.png';

import EditPost from "@components/Common/PostBlock/EditPost";
import Container from "@iso/ui/UI/Container/Container";
import MedicalWrapper from "@components/Guest/Medical/Medical.styles";
import {BACKEND_URL} from "../../../env-config";
import AccommodationsMap from "@components/Guest/Medical/AccommodationsMap";


function Medical(props) {
    const {posts} = props
    const [properties, setProperties] = useState(null)


    useEffect(() => {
        getLocationListing();
    }, []);

    useEffect(() => {
        console.log("properties", properties)
    }, [properties]);

    async function getLocationListing() {
        let properties;
        try {
            const response = await fetch(`${BACKEND_URL}/api/accommodation/property/locations`)
            properties = await response.json()
        } catch (e) {
            properties = []
        }

        setProperties(properties)
    }

    return (
        <MedicalWrapper>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="medical-block">
                <Container className="medical-stays-block">
                    <Row gutter={[32, 32]}>
                        <Col lg={12} sm={24}>
                            <EditPost index={35} size="lg" posts={posts}/>
                            <Link href="/listing">
                                <Button type="secondary" size="large">EXPLORE OUR MEDICAL ACCOMMODATIONS</Button>
                            </Link>
                        </Col>
                        <Col lg={12} sm={24}>
                            <div
                                className="image-wrapper"
                                style={{backgroundImage: `url(${MedicalImage})`}}
                            />
                        </Col>
                    </Row>
                    <Row gutter={32}>
                        <Col lg={24}>
                            <h2 style={{marginTop: 100, textAlign: 'center'}}>Next Level Medical Stays</h2>
                        </Col>
                        <Col lg={8} sm={24}>
                            <div className="stars-item">
                                <img
                                    className="stars-icon"
                                    src={iconHospital}
                                    alt="icon"
                                />
                                <Row>
                                    <Col lg={{offset: 2, span: 20}}>
                                        <EditPost index={40} posts={posts} size="sm"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={8} sm={24}>
                            <div className="stars-item">
                                <img
                                    className="stars-icon"
                                    src={iconKit}
                                    alt="icon"
                                />
                                <Row>
                                    <Col lg={{offset: 2, span: 20}}>
                                        <EditPost index={41} posts={posts} size="sm"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={8} sm={24}>
                            <div className="stars-item">
                                <img
                                    className="stars-icon"
                                    src={iconHand}
                                    alt="icon"
                                />
                                <Row>
                                    <Col lg={{offset: 2, span: 20}}>
                                        <EditPost index={42} posts={posts} size="sm"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <p className="partner-link-text">
                            <span>*</span> Stars of Boston partners with{' '}
                            <Link href="/coming-soon" target="_blank">
                                Private Home Care
                            </Link>{' '}
                            to provide these services.
                        </p>
                    </Row>
                </Container>
                <div className="medical-locations">
                    <Container>
                        <div className="medical-locations-title">
                            <h2>Explore Our Medical Accommodations</h2>
                            <Button type="secondary" size="large">BROWSE RENTALS</Button>
                        </div>
                        {properties && (
                            <AccommodationsMap properties={properties}/>
                        )}
                    </Container>
                </div>

                <Container className="business-accommodation-block">
                    <Row gutter={32}>
                        <Col lg={12} sm={24}>
                            <div
                                className="image-wrapper"
                                style={{backgroundImage: `url(${CorporateImage})`}}
                            />
                        </Col>
                        <Col lg={12} sm={24}>
                            <EditPost index={36} size="lg" posts={posts}/>
                            <Link href="/listing">
                                <Button type="secondary" size="large">EXPLORE OUR CORPORATE ACCOMMODATIONS</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row gutter={32}>
                        <Col lg={24}>
                            <h2 style={{marginTop: 100, textAlign: 'center'}}>Congenial Business Accommodations</h2>
                        </Col>
                        <Col lg={8} sm={24}>
                            <div className="stars-item">
                                <img
                                    className="stars-icon"
                                    src={iconWorkspace}
                                    alt="icon"
                                />
                                <Row>
                                    <Col lg={{offset: 2, span: 20}}>
                                        <EditPost index={37} posts={posts} size="sm"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={8} sm={24}>
                            <div className="stars-item">
                                <img
                                    className="stars-icon"
                                    src={iconCalendar}
                                    alt="icon"
                                />
                                <Row>
                                    <Col lg={{offset: 2, span: 20}}>
                                        <EditPost index={38} posts={posts} size="sm"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={8} sm={24}>
                            <div className="stars-item">
                                <img
                                    className="stars-icon"
                                    src={iconService}
                                    alt="icon"
                                />
                                <Row>
                                    <Col lg={{offset: 2, span: 20}}>
                                        <EditPost index={39} posts={posts} size="sm"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </MedicalWrapper>
    )
}

export default Medical