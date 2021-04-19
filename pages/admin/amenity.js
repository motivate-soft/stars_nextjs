import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import AmenityList from "@components/Admin/Amenity/AmenityList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleAmenity from "@components/Admin/Amenity/SingleAmenity";

const getAmenityId = (props) => {
  try {
    const { router } = props;
    return {
      amenityId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { amenityId, redirectPath } = getAmenityId(props);

    return (
      <>
        <Head>
          <title>Amenity listing</title>
        </Head>
        <DashboardLayout>
          {amenityId ? (
            <SingleAmenity amenityId={amenityId} redirectPath={redirectPath} />
          ) : (
            <AmenityList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
