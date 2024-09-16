// frontend/src/components/Booking/BookingSummary.js
import React, { useEffect, useState } from 'react';
import { getUserBookings, cancelBooking } from '../../services/bookingService';

const BookingSummary = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getUserBookings();
      setBookings(data);
    };
    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    try {
      await cancelBooking(bookingId);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
    } catch (err) {
      console.error('Error canceling booking', err);
    }
  };

  return (
    <div>
      <h3>My Bookings</h3>
      {/* {bookings.map((booking) => (
        <div key={booking._id}>
          <p>Event: {booking.event.title}</p>
          <p>Tickets: {booking.numberOfTickets}</p>
          <p>Status: {booking.status}</p>
          <button onClick={() => handleCancel(booking._id)}>Cancel Booking</button>
        </div>
      ))} */}
    </div>
  );
};

export default BookingSummary;
