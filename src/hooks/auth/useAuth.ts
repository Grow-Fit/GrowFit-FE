import { useRouter } from "next/navigation"

import { useMutation } from "@tanstack/react-query"

import { parentJoin, postChildJoin } from "@/app/api/auth"

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

// 아이 회원가입
export const useChildJoin = () => {
  const router = useRouter()
  return useMutation({
    mutationKey: ["child", "register"],
    mutationFn: postChildJoin,
    onSuccess: (data) => {
      if (data.data) {
        router.push("/success?type=child")
      }
    },
    onError: (error) => {
      router.push("/error?type=join")
      console.error("회원가입 실패:", error)
    },
  })
}

// 아이 로그인
export const useChildLogin = () => {
  const router = useRouter()
  return useMutation({
    mutationKey: ["child", "login"],
    mutationFn: postChildJoin,
    onSuccess: (data) => {
      if (data.data) {
        router.push("/success?type=child")
      }
    },
    onError: (error) => {
      router.push("/error?type=join")
      console.error("회원가입 실패:", error)
    },
  })
}
