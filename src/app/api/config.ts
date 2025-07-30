import axios from "axios"

import { clearAuthCookies } from "@/lib/utils/cookie"

// 로그인 페이지로 리다이렉트하는 함수
const redirectToLogin = () => {
  // 클라이언트 사이드 체크
  if (typeof window !== "undefined") {
    // 현재 페이지 URL을 저장 (로그인 후 돌아갈 수 있도록)
    const currentPath = window.location.pathname + window.location.search
    if (currentPath !== "/login") {
      localStorage.setItem("redirectAfterLogin", currentPath)
    }
    const userType = localStorage.getItem("userType")

    // 로그인 페이지로 이동
    window.location.href = `/login/${userType}`
  }
}

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

    // 401 에러 (인증 실패) 처리
    if (error.response?.status === 401) {
      console.log("토큰이 만료되었습니다. 로그인 페이지로 이동합니다.")

      // 쿠키 삭제
      clearAuthCookies()

      // 리다이렉트 처리
      redirectToLogin()
    }

    return Promise.reject(error)
  }
)

export { authAPI }
