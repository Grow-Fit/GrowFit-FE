import { useRouter } from "next/navigation"

import { useMutation, useQuery } from "@tanstack/react-query"

import { parentJoin, parentQrGenerate } from "@/app/api/auth"

// 부모 회원가입
export const useParentJoin = () => {
  const router = useRouter()
  return useMutation({
    mutationKey: ["parent", "join"],
    mutationFn: parentJoin,
    onSuccess: () => {
      router.push("/success?type=parent")
    },
    onError: (error) => {
      console.error("회원가입 실패:", error)
    },
  })
}

// 부모 - 아이 큐알 코드 생성
export const useParentQrGenerate = () => {
  return useQuery({
    queryKey: ["parent", "qr"],
    queryFn: parentQrGenerate,
    staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
    gcTime: 10 * 60 * 1000, // 10분간 캐시 유지
  })
}
