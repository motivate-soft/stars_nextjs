import React from "react";
import AddBooking from "./AddBooking";
import EditBooking from "./EditBooking";

export default function SingleBooking(props) {
  const { bookingId } = props;
  if (bookingId !== "new") {
    return <EditBooking bookingId={bookingId} />;
  }
  return <AddBooking />;
}
