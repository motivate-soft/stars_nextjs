import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";
import Sticky from "react-stickynode";

import tourIcon from "@iso/assets/images/icon/360-degrees-2.svg";
import TourModal from "@components/Guest/Property/TourModal/TourModal";
import PropertyGalleryModal from "@components/Guest/Property/ImageGallery/ImageGalleryModal";
import TopBar from "@components/Guest/Property/TopBar/TopBar";
import Description from "@components/Guest/Property/Description/Description";
import Amenities from "@components/Guest/Property/Amenities/Amenities";
import LocationMap from "@components/Guest/Property/LocationMap/LocationMap";
import Loader from "@iso/components/utility/loader";
import Reservation from "@components/Guest/Property/Reservation/Reservation";

import PropertyCard from "@components/Guest/Property/PropertyCard/PropertyCard";
import BottomReservation from "./Reservation/BottomReservation";
import ReactGA from "react-ga";
import { Element } from "react-scroll";
import { isServer } from "@iso/lib/helpers/isServer";
import {
  PropertyDetailWrapper,
  BannerImageWrapper,
} from "./PropertyDetail.style";

function PropertyDetail(props) {
  const { property } = props;

  const [href, setHref] = useState("");
  const [isGalleryModalShowing, setIsGalleryModalShowing] = useState(false);
  const [isTourModalShowing, setIsTourModalShowing] = useState(false);

  if (isEmpty(property)) return <Loader />;

  useEffect(() => {
    ReactGA.event({
      category: "engagement",
      action: "view_item",
    });
  }, []);

  useEffect(() => {
    const path = window.location.href;
    setHref(path);
  }, [setHref]);

  function getView() {
    if (!isServer && window.innerWidth < 1201) {
      return "MobileView";
    }
    return "DesktopView";
  }

  return (
    <PropertyDetailWrapper>
      <BannerImageWrapper imageUrl={`url(${property.featured_img.file})`}>
        {/*<Image*/}
        {/*    src="/images/single-post-bg.jpg"*/}
        {/*    layout="fill"*/}
        {/*    objectFit="cover"*/}
        {/*    alt="Listing details banner"*/}
        {/*/>*/}
        <Container className="banner-buttons-wrapper">
          <Button
            type="primary"
            onClick={() => setIsTourModalShowing(true)}
            className="image_gallery_button"
          >
            <img src={tourIcon} alt="tour button" />
          </Button>
          <Button
            type="primary"
            onClick={() => setIsGalleryModalShowing(true)}
            className="image_gallery_button"
          >
            View Photos
          </Button>
        </Container>
      </BannerImageWrapper>

      <PropertyGalleryModal
        isModalShowing={isGalleryModalShowing}
        setIsModalShowing={setIsGalleryModalShowing}
        images={property.gallery_imgs}
      />
      <TourModal
        isModalShowing={isTourModalShowing}
        setIsModalShowing={setIsTourModalShowing}
        tour360={property.tour360}
      />

      <TopBar
        title={property.name}
        shareURL={href}
        media={property.gallery_imgs}
      />

      <Container>
        <Row gutter={30} style={{ marginTop: 30, marginBottom: 50 }}>
          <Col xl={16}>
            <Description property={property} />
            <Amenities amenities={property.amenities} />
            <LocationMap lat={property.lat} lng={property.lng} />
            <Element name="neighborhood" className="neighborhood-block">
              <div>
                <h3>Neighborhood</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: property.neighbourhood }}
                />
              </div>
            </Element>
            <Element name="transit" className="transit-block">
              <div id="transit">
                <h3>Transit</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: property.neighbourhood }}
                />
              </div>
            </Element>
          </Col>
          <Col xl={8}>
            {getView() !== "MobileView" ? (
              <Sticky
                innerZ={900}
                activeClass="isSticky"
                top={202}
                bottomBoundary="#transit"
              >
                <Reservation property={property} />
              </Sticky>
            ) : (
              <BottomReservation property={property} />
            )}
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
          <Col sm={24}>
            <h2>Similar Accommodations</h2>
          </Col>
          {property.similar_properties.map((item, index) => (
            <Col key={index} xl={8} lg={12} sm={24}>
              <PropertyCard
                key={index}
                id={item.id}
                address={item.address}
                title={item.name}
                category={item.category}
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
    </PropertyDetailWrapper>
  );
}

export default PropertyDetail;
