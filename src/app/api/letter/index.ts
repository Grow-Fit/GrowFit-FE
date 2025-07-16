import { authAPI } from "@/app/api/config"

export const getGoalLetter = (weeklyGoalId: number) => {
  return authAPI.get(`/api/letter/${weeklyGoalId}`)
}

export const createGoalLetter = (weeklyGoalId: number, request: string) => {
  return authAPI.post(`/api/letter/${weeklyGoalId}`, request)
}
