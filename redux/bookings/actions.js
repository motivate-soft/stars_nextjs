import { bookings } from "./reducer";

function ascendingSort(booking1, booking2) {
  const name1 = booking1.name ? booking1.name.toUpperCase() : "~";
  const name2 = booking2.name ? booking2.name.toUpperCase() : "~";
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const bookingActions = {
  GET_ALL_BOOKINGS_REQUEST: "GET_ALL_BOOKINGS_REQUEST",
  GET_ALL_BOOKINGS_SUCCESS: "GET_ALL_BOOKINGS_SUCCESS",
  GET_ALL_BOOKINGS_FAILURE: "GET_ALL_BOOKINGS_FAILURE",

  GET_BOOKING_REQUEST: "GET_BOOKING_REQUEST",
  GET_BOOKING_SUCCESS: "GET_BOOKING_SUCCESS",
  GET_BOOKING_FAILURE: "GET_BOOKING_FAILURE",

  ADD_BOOKING_REQUEST: "ADD_BOOKING_REQUEST",
  ADD_BOOKING_SUCCESS: "ADD_BOOKING_SUCCESS",
  ADD_BOOKING_FAILURE: "ADD_BOOKING_FAILURE",

  UPDATE_BOOKING_REQUEST: "UPDATE_BOOKING_REQUEST",
  UPDATE_BOOKING_SUCCESS: "UPDATE_BOOKING_SUCCESS",
  UPDATE_BOOKING_FAILURE: "UPDATE_BOOKING_FAILURE",

  DELETE_BOOKING_REQUEST: "DELETE_BOOKING_REQUEST",
  DELETE_BOOKING_SUCCESS: "DELETE_BOOKING_SUCCESS",
  DELETE_BOOKING_FAILURE: "DELETE_BOOKING_FAILURE",


  getAllBookings: () => ({
    type: bookingActions.GET_ALL_BOOKINGS_REQUEST,
  }),
  getBooking: (bookingId) => ({
    type: bookingActions.GET_BOOKING_REQUEST,
    bookingId,
  }),
  addBooking: (newBooking) => ({
    type: bookingActions.ADD_BOOKING_REQUEST,
    booking: newBooking,
  }),
  updateBooking: (newBooking) => ({
    type: bookingActions.UPDATE_BOOKING_REQUEST,
    booking: newBooking,
  }),
  deleteBooking: (bookingId) => ({
    type: bookingActions.DELETE_BOOKING_REQUEST,
    bookingId,
  }),
};

export default bookingActions;
