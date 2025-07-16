import { useMutation } from "@tanstack/react-query"
import { createGoalLetter, getGoalLetter } from "@/app/api/letter"
import { postLetter } from "@/app/api/goal"

export const useGoalLetterQuery = (weeklyGoalId: number) => {
  return useMutation({
    mutationKey: ["letter_create", weeklyGoalId],
    mutationFn: (request) => createGoalLetter(weeklyGoalId, request),
  })
}

export const useGetGoalLetter = (weeklyGoalId: number) => {
  return useMutation({
    mutationKey: ["letter_gey", weeklyGoalId],
    mutationFn: () => getGoalLetter(weeklyGoalId),
  })
}
