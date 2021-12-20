import axios from "axios";

export const getLocations = async (payload) => {
  return await axios.post("/api/locations", payload);
};
