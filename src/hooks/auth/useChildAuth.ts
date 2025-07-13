import { useRouter } from "next/navigation"

import { useMutation, useQuery } from "@tanstack/react-query"

import { getChildInfoByQRCode } from "@/app/api/auth/child"
import { useUserStore } from "@/stores/userStore"

// 1단계 : 큐알코드로 조회시 아이 아이디값 받아오기
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
      router.push("/error?type=child")
      console.error("회원가입 실패:", error)
    },
  })
}
