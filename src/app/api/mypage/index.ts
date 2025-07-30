import { authAPI } from "@/app/api/config"

export const getParentApi = () => {
  return authAPI.get(`/api/parent`)
}

export const editParentApi = (request) => {
  return authAPI.put(`/api/parent`, request)
}

export const getChildApi = () => {
  return authAPI.get(`/api/child`)
}

export const editChildApi = (request) => {
  return authAPI.put(`/api/child`, request)
}
