import React, { useState, useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Button, Col, Row } from "antd";
import Container from "@iso/ui/UI/Container/Container";
import Box from "@iso/ui/Box/Box";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import PropertyCard from "@components/Guest/Property/PropertyCard/PropertyCard";
import { PropertyListingWrapper } from "./PropertyListing.styles";
import ListingPageSearch from "@components/Guest/Listing/ListingPageSearch";
import { BookingContext } from "@context/BookingProvider";
import { SearchContext } from "@context/SearchProvider";
import ReactGA from "react-ga";
import qs from "query-string";
import EditPost from "@components/Common/PostBlock/EditPost";

const categories = [
  {
    id: 6,
    name: "Private Rooms",
    slug: "private-rooms",
  },
  {
    id: 5,
    name: "Studios",
    slug: "studios",
  },
  {
    id: 1,
    name: "1-Bedroom",
    slug: "1-bedroom",
  },
  {
    id: 2,
    name: "2-Bedrooms",
    slug: "2-bedrooms",
  },
  {
    id: 3,
    name: "3-bedrooms",
    slug: "3-bedrooms",
  },
  {
    id: 4,
    name: "4-Bedrooms",
    slug: "4-bedrooms",
  },
];

function PropertyListing(props) {
  const { items } = props;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const { state: searchState, dispatch: dispatchSearch } = useContext(
    SearchContext
  );
  const { state: bookingState, dispatch: dispatchBooking } = useContext(
    BookingContext
  );

  const router = useRouter();

  useEffect(() => {
    ReactGA.event({
      category: "engagement",
      action: "view_item_list",
    });

    dispatchBooking({
      type: "RESET_BOOKING_INFORMATION",
    });
  }, []);

  useEffect(() => {
    if (!searchState.category) {
      setCategory(null);
    }
  }, [searchState]);

  useEffect(() => {
    if (Object.keys(router.query).includes("category")) {
      const activeCategorySlug = router.query.category;
      const index = categories.findIndex(
        (item) => item.slug === activeCategorySlug
      );
      if (index > -1) {
        setCategory(activeCategorySlug);
      } else {
        setCategory(null);
      }
    }
  }, [router.query]);

  function handleTabClick(key, e) {
    console.log("handleTabClick", key, searchState);

    if (key === "all") {
      key = null;
      setCategory(null);
    }

    const query = {
      ...searchState,
      category: key,
    };

    for (const key in query) {
      if (query[key] === "" || query[key] === null || query[key] === 0) {
        delete query[key];
      }
    }

    dispatchSearch({
      type: "UPDATE_QUERY",
      payload: {
        ...searchState,
        category: key,
      },
    });

    if (process.browser) {
      Router.push(
        {
          pathname: `/listing`,
          query: query,
        },
        {
          pathname: `/listing`,
          query: query,
        }
      );
    }
  }

  return (
    <PropertyListingWrapper>
      <Box as="section" className="main-background-3">
        <ListingPageSearch />
      </Box>
      <h1>Furnished Apartments</h1>
      <Box as="section" className="property-listing-block">
        <Container>
          <Tabs
            activeKey={category ? category : "all"}
            onTabClick={handleTabClick}
          >
            <TabPane tab="All" key="all">
              <Row gutter={[32, 32]}>
                {categories &&
                  categories.map((category) => {
                    let filteredItems = items.filter(
                      (item) => item.category === category.name
                    );
                    if (filteredItems.length > 0) {
                      return (
                        <React.Fragment key={category.name}>
                          <Col sm={24} xs={24}>
                            <h2>{category.name}</h2>
                            <hr className="property-category-border" />
                          </Col>
                          {filteredItems.map((item, index) => (
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
                                monthlyPrice={item.monthly_price}
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
                        </React.Fragment>
                      );
                    }
                  })}
              </Row>
            </TabPane>
            {categories &&
              categories?.length > 0 &&
              categories.map((category) => {
                return (
                  <TabPane tab={category.name} key={category.slug}>
                    <h2>{category.name}</h2>
                    <hr className="property-category-border" />
                    <Row gutter={[32, 32]}>
                      {items
                        .filter((item) => item.category === category.name)
                        .map((item, index) => (
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
                              monthlyPrice={item.monthly_price}
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
                  </TabPane>
                );
              })}
          </Tabs>
        </Container>
      </Box>
    </PropertyListingWrapper>
  );
}

export default PropertyListing;
