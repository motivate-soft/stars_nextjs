import React, { useState } from "react";
import { Element } from "react-scroll";
import { Button, Col, Row } from "antd";
import classNames from "classnames";

const Amenities = (props) => {
  const { amenities } = props;
  const [isCollpased, setIsCollpased] = useState(true);

  function handleClick() {
    setIsCollpased(!isCollpased);
  }

  function renderContent() {
    if (amenities) {
      return (
        <Row gutter={[32, 32]}>
          {amenities.slice(0, 8).map((item, index) => (
            <Col key={index} xl={6} lg={4} md={6} sm={6} xs={12}>
              <div className="amenity-box">
                {item.image && item.image ? (
                  <div
                    style={{
                      backgroundImage: `url(${item.image.file})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      paddingBottom: "100%",
                      boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.15)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      paddingBottom: "100%",
                      backgroundColor: "#ebedef",
                    }}
                  />
                )}
                <p>{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      );
    }
  }

  function renderExtraContent() {
    if (amenities && amenities.length > 8) {
      return (
        <>
          <Row
            gutter={[32, 32]}
            className={classNames({ collpased: isCollpased })}
          >
            {amenities.slice(8).map((item, index) => (
              <Col key={index} xl={6} lg={4} md={6} sm={6} xs={12}>
                <div className="amenity-box">
                  {item.image && item.image ? (
                    <div
                      style={{
                        backgroundImage: `url(${item.image.file})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        paddingBottom: "100%",
                        boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.15)",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        paddingBottom: "100%",
                        backgroundColor: "#ebedef",
                      }}
                    />
                  )}
                  <p>{item.name}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Button type="secondary" onClick={handleClick}>
            Show {isCollpased ? "more" : "less"}
          </Button>
        </>
      );
    }
  }

  return (
    <Element name="amenities" className="amenities-block">
      <h3>Amenities</h3>
      {renderContent()}
      {renderExtraContent()}
    </Element>
  );
};

export default Amenities;
