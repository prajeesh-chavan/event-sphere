// frontend/src/services/bookingService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings/";

// Helper to get Authorization headers with token
const getAuthConfig = () => {
  const token = localStorage.getItem("token"); // Get the token from storage
  return {
    headers: {
      Authorization: `Bearer ${token}`, // Add the Bearer token
    },
  };
};

export const bookEvent = async (eventId, numberOfTickets, userId) => {
  const response = await axios.post(`${API_URL}book`, {
    eventId,
    numberOfTickets,
    userId,
  });
  return response;
};

export const getUserBookings = async () => {
  const response = await axios.get(`${API_URL}my-bookings`, getAuthConfig());
  return response.data;
};

export const cancelBooking = async (bookingId) => {
  const response = await axios.put(`${API_URL}cancel/${bookingId}`);
  return response.data;
};

export const getBookings = async (eventId) => {
  const response = await axios.get(`${API_URL}event/${eventId}`);
  return response.data;
};
