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

api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (originalRequest.url && originalRequest.url.includes('/refresh'))
      {
        return Promise.reject(error);
      }
  
      if ( (error.response.status === 401 || error.response.status === 403 ) && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          const response = await postRefreshToken();
          const { token } = response.data;
          setTokenInHeader(token);
  
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
          console.error(error);
        }
      }
  
      return Promise.reject(error);
    }
  );
  
  export default api