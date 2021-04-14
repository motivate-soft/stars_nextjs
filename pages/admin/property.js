import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import PropertyList from "@components/Admin/Property/PropertyList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleProperty from "@components/Admin/Property/SingleProperty";

const getPropertyId = (props) => {
  try {
    const { router } = props;
    return {
      propertyId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { propertyId, redirectPath } = getPropertyId(props);

    return (
      <>
        <Head>
          <title>Property listing</title>
        </Head>
        <DashboardLayout>
          {propertyId ? (
            <SingleProperty
              propertyId={propertyId}
              redirectPath={redirectPath}
            />
          ) : (
            <PropertyList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
