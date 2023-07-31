import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getAllUrlCards = async () => {
  const response = await axios.get(BASE_URL + "/api/urlCard");
  return response.data;
};
