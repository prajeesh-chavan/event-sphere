// frontend/src/pages/BookingPage.js
import React from "react";
import {BookingForm} from "../components/Booking/BookingForm";
import BookingSummary from "../Components/Booking/BookingSummary.jsx";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  // Get event ID from URL params
  const { eventId } = useParams();

  return (
    <div>
      <h2>Event Booking</h2>
      <BookingForm eventId={eventId} />
    </div>
  );
};

export default BookingPage;
