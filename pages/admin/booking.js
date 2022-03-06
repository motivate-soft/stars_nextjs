import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import BookingList from "@components/Admin/Booking/BookingList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleBooking from "@components/Admin/Booking/SingleBooking";

const getBookingId = (props) => {
  try {
    const { router } = props;
    return {
      propertyId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) { }
};

export default withRouter(
  withAuthSync((props) => {
    let { propertyId, redirectPath } = getBookingId(props);

    return (
      <>
        <Head>
          <title>Bookings</title>
        </Head>
        <DashboardLayout>
          {propertyId ? (
            <SingleBooking
              propertyId={propertyId}
              redirectPath={redirectPath}
            />
          ) : (
            <BookingList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
