import axios from "axios"

import { clearAuthCookies } from "@/lib/utils/cookie"

// 인증이 필요한 API
const authAPI = axios.create({
  baseURL: "",
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
    if (error.response?.status === 401) {
      clearAuthCookies()

      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname
        const isLoginPage = currentPath.includes("/login") || currentPath === "/"

        if (!isLoginPage) {
          window.location.href = "/login"
        }
      }
    }
    return Promise.reject(error)
  }
)

export { authAPI }
