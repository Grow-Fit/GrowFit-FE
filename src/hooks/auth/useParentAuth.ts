import { useQuery } from "@tanstack/react-query"

import { parentQrGenerate } from "@/app/api/auth"

export const useParentQrGenerate = () => {
  return useQuery({
    queryKey: ["parent", "qr"],
    queryFn: parentQrGenerate,
    staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
    gcTime: 10 * 60 * 1000, // 10분간 캐시 유지
  })
}
