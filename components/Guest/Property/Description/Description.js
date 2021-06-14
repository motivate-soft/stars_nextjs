import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import { Col, Row } from "antd";
import {
  FaBath,
  FaBed,
  FaCouch,
  FaDoorOpen,
  FaParking,
  FaPaw,
  FaUserFriends,
} from "react-icons/fa";

const Description = (props) => {
  const { property } = props;
  const {
    name,
    description,
    furnished,
    sleeps,
    category,
    countBed,
    bathroom_count,
    shared_bathroom,
    bedroom_count,
    rental_parking,
    pets_considered,
    property_rooms,
  } = property;

  return (
    <Element name="overview" className="overview-block">
      <h3>{name}</h3>
      <div className="property-feature-icons-wrapper">
        {furnished && (
          <span>
            <FaCouch /> Furnished
          </span>
        )}
        {sleeps && sleeps !== 0 ? (
          <span>
            <FaUserFriends /> Sleeps {sleeps}
          </span>
        ) : (
          ""
        )}
        {category === "Private Rooms" ? (
          <span>
            <FaDoorOpen /> Private Room
          </span>
        ) : category === "Studios" ? (
          <span>
            <FaDoorOpen /> Studio
          </span>
        ) : countBed && countBed !== 0 ? (
          <span>
            <FaDoorOpen /> {countBed} Bedroom
          </span>
        ) : (
          ""
        )}
        {bathroom_count && bathroom_count !== 0 && shared_bathroom === false ? (
          <span>
            <FaBath /> {bathroom_count} Bathroom
          </span>
        ) : (
          ""
        )}
        {shared_bathroom && shared_bathroom === true ? (
          <span>
            <FaBath /> Shared Bathroom
          </span>
        ) : (
          ""
        )}
        {rental_parking && (
          <span>
            <FaParking /> Rental Parking
          </span>
        )}
        {pets_considered && (
          <span>
            <FaPaw /> Pets considered
          </span>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <Row gutter={[16, 16]}>
        {property_rooms &&
          property_rooms.map((item, index) => (
            <Col key={item.id} lg={6} sm={12} md={8}>
              <div className="property-room">
                <FaBed />
                <h5>{item.name}</h5>
                <h6>{item.bed_type}</h6>
              </div>
            </Col>
          ))}
      </Row>
    </Element>
  );
};

export default Description;
