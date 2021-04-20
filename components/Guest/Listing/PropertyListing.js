import React, {useContext, useEffect} from 'react'
import {Button, Col, Row} from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import Tabs, {TabPane} from "@iso/components/uielements/tabs";
import styled from "styled-components";
import PropertyCard from "@components/Guest/Property/PropertyCard/PropertyCard";
import {palette} from "styled-tools";
import ListingPageSearch from "@components/Guest/Listing/Search/ListingPageSearch";
import {BookingContext} from "@context/BookingProvider";
import ReactGA from 'react-ga'

const PropertyListingWrapper = styled.div`
  .property-listing-block {
    padding: 40px 15px;

    h2 {
      color: ${palette('primary', 0)};
    }

    .ant-tabs {
      padding-bottom: 100px;

      .ant-tabs-nav-list {
        display: flex;
        width: 100%;

        .ant-tabs-tab {
          margin: 0 16px 0 0;
          box-sizing: border-box;
          padding: 8px 16px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          text-transform: capitalize;
          color: ${palette('primary', 0)} !important;
          background-color: transparent;
          border: 1px solid ${palette('warning', 0)} !important;
          border-bottom: none !important;
          border-radius: 5px 5px 0 0 !important;

          &:last-child {
            margin-right: 0;
          }

          &.ant-tabs-tab-active {
            color: ${palette('primary', 0)} !important;
            font-weight: bold;
            background-color: ${palette('warning', 0)} !important;
          }

          &:hover,
          &:active {
            color: ${palette('primary', 0)} !important;
            font-weight: bold;
            background-color: ${palette('warning', 0)} !important;
          }

          &::before {
            background: none repeat scroll 0 0 #e8c36a;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: -2px;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 100%;
          }

          &::after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 3px;
            left: 50%;
            position: absolute;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
          }

          &:hover::after {
            width: 100%;
            left: 0;
          }

          &:active::after {
            background: none repeat scroll 0 0 #0071aa;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 0;
            position: absolute;
            width: 100%;
          }
        }
      }
    }

    .ant-row {
      padding-top: 50px;
    }

    .property-category-border {
      width: 100%;
      border-top: 3px solid ${palette('primary', 0)};
      margin: 2rem 0;
    }

    .tab-content {
      width: 100%;
    }

  }
`

const categories = [
    {
        "id": 6,
        "name": "Private Rooms",
        "slug": "private-rooms",
    },
    {
        "id": 5,
        "name": "Studios",
        "slug": "studios",
    },
    {
        "id": 1,
        "name": "1-Bedroom",
        "slug": "1-bedroom",
    },
    {
        "id": 2,
        "name": "2-Bedrooms",
        "slug": "2-bedrooms",
    },
    {
        "id": 3,
        "name": "3-bedrooms",
        "slug": "3-bedrooms",
    },
    {
        "id": 4,
        "name": "4-Bedrooms",
        "slug": "4-bedrooms",
    },
]

function PropertyListing(props) {
    // const {items, categories, category} = props
    const {items, category} = props
    const {state, dispatch} = useContext(BookingContext);

    useEffect(() => {
        ReactGA.event({
            category: 'engagement',
            action: 'view_item_list'
        });
        dispatch({
            type: 'RESET_BOOKING_INFORMATION',
        })
    }, [])

    return (
        <PropertyListingWrapper>
            <Box as="section" className="main-background-3">
                <ListingPageSearch/>
            </Box>
            <Box as="section" className="property-listing-block">
                <Container>
                    <Tabs
                        defaultActiveKey={category ? category : 'all'}
                    >
                        <TabPane tab="All" key="all">
                            <Row gutter={[32, 32]}>
                                {
                                    categories && categories.map(category => {
                                        let filteredItems = items.filter(item => item.category === category.name)
                                        if (filteredItems.length > 0) {
                                            return (
                                                <React.Fragment key={category.name}>
                                                    <Col sm={24}>
                                                        <h2>{category.name}</h2>
                                                        <hr className="property-category-border"/>
                                                    </Col>
                                                    {
                                                        filteredItems.map((item, index) => (
                                                            <Col key={index} lg={8} sm={24}>
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
                                                                    image={item.featured_img}/>
                                                            </Col>
                                                        ))
                                                    }
                                                </React.Fragment>
                                            )
                                        }
                                    })
                                }
                            </Row>
                        </TabPane>
                        {
                            categories && categories?.length > 0 &&
                            categories.map(category => {
                                return (
                                    <TabPane tab={category.name} key={category.slug}>
                                        <Row gutter={[32, 32]}>
                                            {
                                                items.filter((item) => item.category === category.name).map((item, index) => (
                                                    <Col key={index} lg={8} sm={24}>
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
                                                            image={item.featured_img}/>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </TabPane>
                                )
                            })
                        }
                        {/*<TabPane tab="Private rooms" key="private">*/}

                        {/*</TabPane>*/}
                        {/*<TabPane tab="Studios" key="studios">*/}

                        {/*</TabPane>*/}
                        {/*<TabPane tab="1-Bedroom" key="1-bedroom">*/}

                        {/*</TabPane>*/}
                        {/*<TabPane tab="2-Bedrooms" key="2-bedrooms">*/}

                        {/*</TabPane>*/}
                        {/*<TabPane tab="3-Bedrooms" key="3-bedrooms">*/}

                        {/*</TabPane>*/}
                        {/*<TabPane tab="4-Bedrooms" key="4-bedrooms">*/}

                        {/*</TabPane>*/}
                    </Tabs>

                </Container>
            </Box>
        </PropertyListingWrapper>

    )
}

export default PropertyListing