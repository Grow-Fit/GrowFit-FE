import axios from "axios";

const axiosAuthConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};
const authAPI = axios.create(axiosAuthConfig);

export { authAPI };
