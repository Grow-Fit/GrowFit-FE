import { authAPI } from "@/app/api/config"

export const createGoalLetter = (weeklyGoalId: number, request: string) => {
  return authAPI.post(`/api/letter/${weeklyGoalId}`, request)
}
