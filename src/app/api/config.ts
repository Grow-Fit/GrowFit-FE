import { deleteStorage, getStorage } from "@/lib/utils/storage";
import axios from "axios";

const axiosAuthConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

const authAPI = axios.create(axiosAuthConfig);

authAPI.interceptors.request.use(
  (config) => {
    const token = getStorage("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

authAPI.interceptors.response.use(
  (res) => {
    if (res.data.errors) {
      throw new Error(res.data.errors);
    }

    return res.data;
  },
  async (error) => {
    if (error.response.status === 401) {
      deleteStorage("isUser");
      deleteStorage("userRefresh");
      deleteStorage("userId");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { authAPI };
