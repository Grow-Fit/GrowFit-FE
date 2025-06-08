import axios from "axios"

import { MAX_TIMEOUT_TIME } from "@/lib/constants/api"

// 공개 API용
export const axiosInstance = axios.create({
  baseURL: "",
  timeout: MAX_TIMEOUT_TIME,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true 제거 (인증 불필요한 API용)
})
