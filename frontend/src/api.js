import axios from "axios";

export const fetchEvents = async () => {
  try {
    const response = await axios.get("http://localhost:5000/events");
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};
