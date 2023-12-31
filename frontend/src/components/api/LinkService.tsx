import axios from "axios";
import { NewUrlCardData } from "../links/add/NewUrlCardData";

const BASE_URL = "http://localhost:5000";

export const getAllUrlCards = async () => {
  const response = await axios.get(BASE_URL + "/api/urlCard");
  return response.data;
};

export const postNewUrlCard = async (data: NewUrlCardData) => {
  const response = await axios.post(BASE_URL + "/api/urlCard", data);
  return response.data;
};

export const deleteUrlCard = async (id: String) => {
  const response = await axios.delete(BASE_URL + "/api/urlCard/" + id);
  return response.data;
};
