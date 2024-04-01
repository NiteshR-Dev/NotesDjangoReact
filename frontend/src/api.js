//axios interceptor to send and receive requests
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
import NotFound from "./pages/NotFound";

//
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // from inside environvariable file
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; //this is how u pass jwt access token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
