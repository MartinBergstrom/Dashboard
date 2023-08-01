import axios from "axios";
import { UrlCardData } from "../links/UrlCardData";

const BASE_URL = "http://localhost:5000";

export const getAllUrlCards = async () => {
  const response = await axios.get(BASE_URL + "/api/urlCard");
  return response.data;
};

export const postNewUrlCard = async (data: UrlCardData) => {
  const response = await axios.post(BASE_URL + "/api/urlCard", data);
  return response.data;
};
