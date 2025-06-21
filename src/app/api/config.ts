import axios from "axios"

import { clearAuthCookies } from "@/lib/utils/cookie"

// 인증이 필요한 API
const authAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true, // 쿠키 자동 전송
})

// @description 쿠키 자동 전송으로 request 설정 불필요하여 제거
authAPI.interceptors.response.use(
  (res) => {
    if (res.data.errors) {
      throw new Error(res.data.errors)
    }
    return res.data
  },
  async (error) => {
    console.error("API 에러 상세:", error.response?.data) // 에러 로깅 추가
    return Promise.reject(error)
  }
)

export { authAPI }
