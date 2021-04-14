import React from 'react';
import AmenitiesWrapper from './Amenities.style';
import {Element} from 'react-scroll';
import {Col, Row} from "antd";

const Amenities = ({amenities}) => {
    console.log("amenities", amenities)
    return (
        <Element name="amenities" className="Amenities">
            <AmenitiesWrapper>
                <h3>Amenities</h3>
                <Row gutter={[32, 32]}>
                    {amenities &&
                    amenities.map((item, index) => (
                        <Col key={index} lg={6} sm={12}>
                            <div className="amenity-box">
                                {item.image && item.image ? (
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.image.file})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            paddingBottom: '100%',
                                            boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.15)'
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            paddingBottom: '100%',
                                            backgroundColor: '#ebedef'
                                        }}
                                    />
                                )}
                                <p>{item.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </AmenitiesWrapper>
        </Element>
    );
};


export default Amenities;
