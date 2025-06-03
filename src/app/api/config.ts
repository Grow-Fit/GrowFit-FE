// 인증 필요한 API용
import axios from "axios"

import { deleteCookie, getCookie } from "@/lib/utils/cookie" // 쿠키 유틸리티 함수로 변경

const axiosAuthConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
}

const authAPI = axios.create(axiosAuthConfig)

authAPI.interceptors.request.use((config) => {
  const token = getCookie("accessToken") // 쿠키에서 토큰 가져오기
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

authAPI.interceptors.response.use(
  (res) => {
    if (res.data.errors) {
      throw new Error(res.data.errors)
    }

    return res.data
  },
  async (error) => {
    if (error.response.status === 401) {
      // 쿠키에서 사용자 정보 삭제
      deleteCookie("isUser")
      deleteCookie("userRefresh")
      deleteCookie("userId")
      deleteCookie("accessToken") // accessToken도 삭제
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

export { authAPI }
