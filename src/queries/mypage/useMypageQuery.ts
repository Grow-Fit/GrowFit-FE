import { useMutation, useQuery } from "@tanstack/react-query"
import { getGoalMainInfo, postCertifyGoal } from "@/app/api/goal"
import { editChildApi, editParentApi, getChildApi, getParentApi } from "@/app/api/mypage"

export const useParentInfoQuery = () => {
  return useQuery({
    queryKey: ["parent_info"],
    queryFn: () => getParentApi(),
  })
}

export const useChildInfoQuery = () => {
  return useQuery({
    queryKey: ["child_info"],
    queryFn: () => getChildApi(),
  })
}

export const useParentInfoMutation = () => {
  return useMutation({
    mutationKey: ["parent_edit"],
    mutationFn: (request) => editParentApi(request),
  })
}

export const useChildInfoMutation = () => {
  return useMutation({
    mutationKey: ["child_edit"],
    mutationFn: (request) => editChildApi(request),
  })
}
