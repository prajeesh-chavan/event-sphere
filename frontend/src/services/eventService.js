// frontend/src/services/eventService.js

import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/events/`;

// Helper to get Authorization headers with token
const getAuthConfig = () => {
  const token = localStorage.getItem("token"); // Get the token from storage
  return {
    headers: {
      Authorization: `Bearer ${token}`, // Add the Bearer token
    },
  };
};

export const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`, getAuthConfig());
  return response.data;
};

// Additional functions for creating, updating, and deleting events can be added here

export const createEvent = async (event) => {
  const response = await axios.post(`${API_URL}create-event`, event);
  return response.data;
};

export const updateEvent = async (id, event) => {
  const response = await axios.put(`${API_URL}/${id}`, event, getAuthConfig());
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
