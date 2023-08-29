import axios from "axios";

const API_URL = "http://localhost:5000";

export const getInstructorDetails = async (instructorId) => {
  try {
    const response = await axios.get(`${API_URL}/user/getInstructorDetailsByld/${instructorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching instructor details:", error);
    return null;
  }
};
