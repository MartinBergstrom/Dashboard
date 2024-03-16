import axios from 'axios';
import { postRefreshToken } from './LoginService';

export const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});


export const setTokenInHeader = (token: string) => {
  api.defaults.headers.common['Authorization'] = "Bearer " + token;
}

export const unsetTokenInHeader = () => {
  delete api.defaults.headers.common["Authorization"];
}

export default api