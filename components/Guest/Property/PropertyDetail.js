import React, {useEffect, useState} from 'react'
import {Button, Col, Modal, Row} from "antd";
import Container from "@iso/ui/UI/Container/Container";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";
import Sticky from 'react-stickynode';

import tourIcon from "@iso/assets/images/icon/360-degrees-2.svg"
import TourModal from "@components/Guest/Property/TourModal/TourModal";
import PropertyGalleryModal from "@components/Guest/Property/ImageGallery/ImageGalleryModal";
import TopBar from "@components/Guest/Property/TopBar/TopBar";
import Description from "@components/Guest/Property/Description/Description";
import Amenities from "@components/Guest/Property/Amenities/Amenities";
import LocationMap from "@components/Guest/Property/LocationMap/LocationMap";
import Loader from "@iso/components/utility/loader";
import Reservation from "@components/Guest/Property/Reservation/Reservation";
import {palette} from "styled-tools";
import {Element} from "react-scroll";
import {useSelector} from "react-redux";

const PropertyDetailWrapper = styled.div`
  h3 {
    color: ${palette('primary', 0)};
    margin-bottom: 30px;
  }
`

export const BannerImageWrapper = styled.div`
  position: relative;
  margin: 120px 0 0;
  padding-bottom: 0;
  background-image: ${props => props.imageUrl};
  background-color: #f2f2f3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 450px;

  .banner-buttons-wrapper {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;

    .ant-btn {
      margin-bottom: 24px;
      padding: 8px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      height: 3rem;
      background-color: #e8c36a;
      border: 1px solid #e8c36a !important;
      text-transform: uppercase;
      border-radius: 10px;
      min-width: 6rem;

      &:first-child {
        margin-right: 20px;

        img {
          height: 30px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    height: 406px;
  }

`;


function PropertyDetail(props) {
    const {property} = props

    const [href, setHref] = useState("");
    const [isGalleryModalShowing, setIsGalleryModalShowing] = useState(false);
    const [isTourModalShowing, setIsTourModalShowing] = useState(false);

    const {view} = useSelector(state => state.App);

    if (isEmpty(property)) return <Loader/>;

    useEffect(() => {
        const path = window.location.href;
        setHref(path);
    }, [setHref]);


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
                        <img src={tourIcon} alt="tour button"/>
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
                images={property.gallery_imgs}/>
            <TourModal
                isModalShowing={isTourModalShowing}
                setIsModalShowing={setIsTourModalShowing}
                tour360={property.tour360}/>

            <TopBar title={property.name} shareURL={href} media={property.gallery_imgs}/>

            <Container>
                <Row gutter={30} style={{marginTop: 30, marginBottom: 50}}>
                    <Col xl={16}>
                        <Description
                            property={property}
                        />
                        <Amenities amenities={property.amenities}/>
                        <LocationMap lat={property.lat} lng={property.lng}/>
                        <Element name="neighbourhood">
                            <div>
                                <h3>Neighbourhood</h3>
                                <div dangerouslySetInnerHTML={{__html: property.neighbourhood}}/>
                            </div>
                        </Element>
                        <Element name="transit">
                            <div>
                                <h3>Transit</h3>
                                <div dangerouslySetInnerHTML={{__html: property.neighbourhood}}/>
                            </div>
                        </Element>
                    </Col>
                    <Col xl={8}>
                        {view !== 'MobileView' ? (
                            <Sticky
                                innerZ={999}
                                activeClass="isSticky"
                                top={202}
                                bottomBoundary="#reviewSection"
                            >
                                <Reservation property={property}/>
                            </Sticky>
                        ) : (
                            <Reservation  property={property}/>
                        )}
                    </Col>
                </Row>
            </Container>
        </PropertyDetailWrapper>
    )
}

export default PropertyDetail