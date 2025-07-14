import { authAPI } from "@/app/api/config"

import { ParentJoinRequestType } from "@/types/parent"

const AuthBaseUrl = "/api/parent"

// 부모 회원가입
export const parentJoin = async (joinInfo: ParentJoinRequestType) => {
  return authAPI.post(`${AuthBaseUrl}/child`, joinInfo)
}
// 부모 qr생성
export const parentQrGenerate = async () => {
  return authAPI.get(`${AuthBaseUrl}/child/qr`)
}
