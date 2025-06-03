import axios from "axios"

import { clearAuthCookies, getCookie } from "@/lib/utils/cookie"

const axiosAuthConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
}

const authAPI = axios.create(axiosAuthConfig)

authAPI.interceptors.request.use((config) => {
  const token = getCookie("accessToken")
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
    if (error.response?.status === 401) {
      clearAuthCookies()

      if (typeof window !== "undefined") {
        window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  }
)

export { authAPI }
