import { authAPI } from "@/app/api/config"

export const getGoalInfo = (id: number) => {
  return authAPI.get(`/goal/2025-01-25`)
}
