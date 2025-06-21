import { useQuery } from "@tanstack/react-query"
import { getGoalMainInfo } from "@/app/api/goal"

export const useGoalMainQuery = (clickedDate) => {
  return useQuery({
    queryKey: ["goalmain"],
    queryFn: () => getGoalMainInfo(clickedDate),
    onSuccess: (res: any) => {},
  })
}
