import { authAPI } from "@/app/api/config"

export const getGoalMainInfo = (date: string) => {
  return authAPI.get(`/api/goal?date=${date}`)
}

export const createGoal = (request) => {
  return authAPI.post(`/api/goal`, request)
}

export const getGoalDetailInfo = (date: string) => {
  return authAPI.get(`/api/goal?date=${date}`)
}

export const postCertifyGoal = (goalId: number, request) => {
  return authAPI.post(`/api/goal/${goalId}/certify`, request)
}
