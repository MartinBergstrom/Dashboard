import { NewUrlCardData } from "../links/add/NewUrlCardData";
import api, { BASE_URL } from "./api";


export const getAllUrlCards = async () => {
  const response = await api.get(BASE_URL + "/api/urlCard");
  return response.data;
};

export const postNewUrlCard = async (data: NewUrlCardData) => {
  const response = await api.post(BASE_URL + "/api/urlCard", data);
  return response.data;
};

export const deleteUrlCard = async (id: String) => {
  const response = await api.delete(BASE_URL + "/api/urlCard/" + id);
  return response.data;
};
