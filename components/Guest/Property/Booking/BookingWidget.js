import React, { useContext, useEffect, useState } from "react";
import BookingCalculationForm from "./BookingCalculationForm";
import Card from "@iso/ui/UI/Card/Card";
import { Button, Col, Row } from "antd";
import PropertyGalleryModal from "@components/Guest/Property/ImageGallery/ImageGalleryModal";
import tourIcon from "@assets/icons/icons_360.svg";
import { BookingContext } from "@context/BookingProvider";
import { useRouter } from "next/router";
import { BACKEND_URL } from "../../../../env-config";
import Loader from "@iso/components/utility/loader";
import { notification } from "@iso/components";
import { CardHeaderWrapper } from "@components/Guest/Property/Booking/BookingWdiget.style";

const CardHeader = ({ name, images, isModalShowing, setIsModalShowing }) => {
  const headerCarousel = (
    <React.Fragment>
      <Row>
        {images ? (
          [0, 1, 2].map((index) => {
            if (images[index] === undefined) {
              return (
                <Col key={index} lg={8}>
                  <div
                    style={{
                      backgroundImage: `url(${images[0].file})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      height: 100,
                    }}
                  />
                </Col>
              );
            }
            return (
              <Col key={index} lg={8}>
                <div
                  style={{
                    backgroundImage: `url(${images[index].file})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    height: 100,
                  }}
                />
              </Col>
            );
          })
        ) : (
          <Loader />
        )}
      </Row>
    </React.Fragment>
  );

  return (
    <CardHeaderWrapper>
      {headerCarousel}
      <Row>
        <div className="header-buttons-wrapper">
          <Button type="secondary" size="large">
            <img src={tourIcon} alt="tour" />
          </Button>
          <Button
            type="secondary"
            size="large"
            onClick={() => setIsModalShowing(true)}
          >
            Browse Photos
          </Button>
        </div>
      </Row>
      <h3>{name}</h3>
      <PropertyGalleryModal
        isModalShowing={isModalShowing}
        setIsModalShowing={setIsModalShowing}
        images={images}
      />
    </CardHeaderWrapper>
  );
};

export default function BookingWidget(props) {
  const { disabled } = props;
  const [isLoading, setIsLoading] = useState(null);
  const { state: { propertySlug, property }, dispatch } = useContext(BookingContext);
  const router = useRouter();

  useEffect(() => {
    if (!propertySlug) {
      router.push("/listing");
    }
    if (propertySlug && !property) {
      fetchPropertyDetail(propertySlug);
    }
    if (propertySlug && property && propertySlug !== property.slug) {
      fetchPropertyDetail(propertySlug);
    }
  }, []);

  const [isModalShowing, setIsModalShowing] = useState(false);

  const fetchPropertyDetail = async (propertySlug) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/accommodation/property/listing/${propertySlug}`
      );
      const property = await res.json();
      dispatch({
        type: "UPDATE_BOOKING_INFORMATION",
        payload: {
          property,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.log(`BookingWidget->fetchPropertyDetail error:`, error)
    }
  };

  return (
    <Card
      className="reservation_sidebar"
      header={
        !isLoading && property ? (
          <CardHeader
            name={property.name}
            images={property.gallery_imgs}
            isModalShowing={isModalShowing}
            setIsModalShowing={setIsModalShowing}
          />
        ) : (
          <Loader />
        )
      }
      footer={null}
    >
      {!isLoading && property ? (
        <BookingCalculationForm disabled={disabled} property={property} />
      ) : (
        <Loader />
      )}
    </Card>
  );
}
