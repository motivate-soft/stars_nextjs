import React, { Fragment, useContext, useState } from "react";
import ReservationForm from "./ReservationForm";
import Card from "@iso/ui/UI/Card/Card";
import { CardHeaderWrapper } from "@components/Guest/Property/Reservation/Reservation.style";

const CardHeader = ({ price, minMonthPrice }) => {
  return (
    <CardHeaderWrapper>
      <h3>
        Starting at
        <br />${price}/night, ${minMonthPrice}/month
      </h3>
    </CardHeaderWrapper>
  );
};

export default function Reservation(props) {
  const { property } = props;

  return (
    <Card
      className="reservation_sidebar"
      header={
        <CardHeader
          price={property.price}
          minMonthPrice={property.min_month_price}
        />
      }
      content={
        <ReservationForm
          propertyId={property.id}
          propertySlug={property.slug}
          bookervilleId={property.bookerville_id}
          price={property.price}
          minSleeps={property.min_sleeps}
          checkedDates={property.checked_dates}
          pricingItems={property.pricing_items}
        />
      }
      footer={null}
    />
  );
}
