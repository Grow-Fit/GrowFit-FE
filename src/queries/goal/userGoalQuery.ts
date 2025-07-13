import { useMutation, useQuery } from "@tanstack/react-query"
import { createGoal, getGoalMainInfo, postCertifyGoal, postLetter } from "@/app/api/goal"

export const useGoalMainQuery = (clickedDate) => {
  return useQuery({
    queryKey: ["goalmain", clickedDate],
    queryFn: () => getGoalMainInfo(clickedDate),
  })
}

export const useGoalCreate = (data) => {
  return useMutation({
    mutationKey: ["goaldata"],
    mutationFn: () => createGoal(data),
  })
}

export const useGoalDetailQuery = (clickedDate) => {
  return useQuery({
    queryKey: ["goaldetail", clickedDate],
    queryFn: () => getGoalMainInfo(clickedDate),
  })
}

export const useGoalCertifyQuery = (goalId: number) => {
  return useMutation({
    mutationKey: ["goalcertify", goalId],
    mutationFn: (request) => postCertifyGoal(goalId, request),
  })
}

export const useGoalLetter = (goalId: number) => {
  return useMutation({
    mutationKey: ["goalletter", goalId],
    mutationFn: (request) => postLetter(goalId, request),
  })
}
