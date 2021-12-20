import axios from "axios";

export const putProfile = async () => {
  return await axios.put("/api/profile/info");
};

export const getProfileLocations = async (token) => {
  return await axios.get(`/api/profile/location?token=${token}`);
};

export const postLocationInfo = async (userInfo) => {
  return await axios.post("/api/profile/location", userInfo);
};

export const putLocationInfo = async ({ token, id, locationInfo }) => {
  return await axios.put(`/api/profile/location/${id}?token=${token}`, locationInfo);
};

export const postArticleInfo = async (userInfo) => {
  return await axios.post("/api/profile/article", userInfo);
};

export const putArticleInfo = async () => {
  return await axios.put("/api/profile/article");
};
