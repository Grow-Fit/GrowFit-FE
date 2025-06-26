import { useMutation, useQuery } from "@tanstack/react-query"
import { crateGoal, getGoalMainInfo } from "@/app/api/goal"

export const useGoalMainQuery = (clickedDate) => {
  return useQuery({
    queryKey: ["goalmain", clickedDate],
    queryFn: () => getGoalMainInfo(clickedDate),
  })
}

export const useGoalCreate = (data) => {
  return useMutation({
    mutationKey: ["goaldata"],
    mutationFn: () => crateGoal(data),
  })
}
