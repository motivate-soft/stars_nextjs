import React from "react";
import AddAmenity from "./AddAmenity";
import EditAmenity from "./EditAmenity";

export default function SingleAmenity(props) {
  const { amenityId } = props;
  if (amenityId !== "1234") {
    return <EditAmenity amenityId={amenityId} />;
  }
  return <AddAmenity />;
}
