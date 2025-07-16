import { authAPI } from "@/app/api/config"

import { ChildLoginRequest } from "@/types/child"

const AuthBaseUrl = "/api"

// 아이 로그인
export const postChildLogin = async (loginInfo: ChildLoginRequest) => {
  return authAPI.post(`${AuthBaseUrl}/child`, loginInfo)
}
