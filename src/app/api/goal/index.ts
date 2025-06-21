import { authAPI } from "@/app/api/config"

export const getGoalMainInfo = (date: string) => {
  return authAPI.get(`/api/goal/${date}`)
}
