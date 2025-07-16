import { useMutation } from "@tanstack/react-query"
import { createGoalLetter } from "@/app/api/letter"

export const useGoalLetterQuery = (weeklyGoalId: number) => {
  return useMutation({
    mutationKey: ["letter_create", weeklyGoalId],
    mutationFn: (request) => createGoalLetter(weeklyGoalId, request),
  })
}
