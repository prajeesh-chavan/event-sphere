// frontend/src/services/authService.js
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth/`;

// Register user

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

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error(
      "Forgot password error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const resetPassword = async (newPassword, token) => {
  try {
    const response = await axios.post(`${API_URL}reset-password/${token}`, {
      newPassword,
      token,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Reset password error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
