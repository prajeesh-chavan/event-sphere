// frontend/src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

// Register user
// frontend/src/services/authService.js
export const register = async (username, email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}register`, {
      username,
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Registration error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Login user
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}login`, {
    username,
    password,
  });
  return response.data;
};


