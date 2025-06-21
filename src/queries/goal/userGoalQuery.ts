import { useQuery } from "@tanstack/react-query"
import { getGoalMainInfo } from "@/app/api/goal"

export const useGoalMainQuery = () => {
  return useQuery({
    queryKey: ["goalmain"],
    queryFn: () => getGoalMainInfo("2025-01-25"),
    onSuccess: (res: any) => {},
  })
}
