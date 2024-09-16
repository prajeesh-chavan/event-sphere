import axios from "axios";

// Base URL for your API
const API_BASE_URL = "http://localhost:5000/api"; // Update this for production if needed

// Helper to get Authorization headers with token
const getAuthConfig = () => {
  const token = localStorage.getItem("token"); // Get the token from storage
  return {
    headers: {
      Authorization: `Bearer ${token}`, // Add the Bearer token
    },
  };
};

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/profile`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (profileData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/user/profile`,
      profileData,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

// Update profile picture
export const updateProfilePicture = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/profile-picture`,
      formData,
      {
        ...getAuthConfig(),
        headers: {
          ...getAuthConfig().headers,
          "Content-Type": "multipart/form-data", // For file uploads
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating profile picture:", error);
    throw error;
  }
};
