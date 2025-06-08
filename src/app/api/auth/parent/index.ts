import { authAPI } from "@/app/api/config"

const goalBaseUrl = "/api/parent/"

// 부모 로그인
export const parentLogin = async () => {
  return authAPI.get(`${goalBaseUrl}`)
}
// 부모 회원가입
export const parentRegister = async () => {}
// 부모 qr생성
export const parentQrGenerate = async () => {
  return authAPI.get(`${goalBaseUrl}child/qr`)
}
