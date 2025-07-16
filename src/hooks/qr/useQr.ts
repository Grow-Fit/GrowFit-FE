import { useRouter } from "next/navigation"

import { useMutation, useQuery } from "@tanstack/react-query"

import { parentQrGenerate } from "@/app/api/auth"
import { getChildInfoByQRCode } from "@/app/api/auth/join/child"
import { useUserStore } from "@/stores/userStore"

// 부모 - 큐알 코드 생성
export const useParentQrGenerate = () => {
  return useQuery({
    queryKey: ["parent", "qr"],
    queryFn: parentQrGenerate,
    staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
    gcTime: 10 * 60 * 1000, // 10분간 캐시 유지
  })
}

// 아이 - 큐알코드로 조회시 아이 아이디값 받아오기
export const useGetChildInfoByQr = () => {
  const { updateChild } = useUserStore()
  const router = useRouter()
  return useMutation({
    mutationKey: ["child", "qr"],
    mutationFn: getChildInfoByQRCode,
    onSuccess: (data) => {
      if (data.data) {
        updateChild({
          child_id: data.data.child_id,
        })
        router.push("/join/child/2")
      }
    },
    onError: (error) => {
      router.push("/error?type=qr")
      console.error("qr api 실패:", error)
    },
  })
}
