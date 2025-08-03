import { useMutation, useQuery } from "@tanstack/react-query"
import { getGoalMainInfo, postCertifyGoal } from "@/app/api/goal"
import { editChildApi, editParentApi, getChildApi, getParentApi } from "@/app/api/mypage"

export const useParentInfoQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: ["parent_info"],
    queryFn: () => getParentApi(),
    enabled,
  })
}

export const useChildInfoQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: ["child_info"],
    queryFn: () => getChildApi(),
    enabled,
  })
}

export const useParentInfoMutation = (onSuccess) => {
  return useMutation({
    mutationKey: ["parent_edit"],
    mutationFn: (request) => editParentApi(request),
    onSuccess: onSuccess,
  })
}

export const useChildInfoMutation = () => {
  return useMutation({
    mutationKey: ["child_edit"],
    mutationFn: (request) => editChildApi(request),
  })
}
