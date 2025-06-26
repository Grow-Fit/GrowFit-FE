import { authAPI } from "@/app/api/config"

export const getGoalMainInfo = (date: string) => {
  return authAPI.get(`/api/goal?date=${date}`)
}

export const crateGoal = (request) => {
  return authAPI.post(`/api/goal`, request)
}
