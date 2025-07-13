import { authAPI } from "@/app/api/config"

import { ChildInfoByQRCodeRequest, ChildInfoByQRCodeResponse } from "@/types/child"
import { BaseAPIResponse } from "@/types/response"

const AuthBaseUrl = "/api/child"

// 아이 회원가입 api

// 1단계 : 큐알코드로 조회시 아이 아이디값 받아오기
export const getChildInfoByQRCode = async (
  params: ChildInfoByQRCodeRequest
): Promise<BaseAPIResponse<ChildInfoByQRCodeResponse>> => {
  return authAPI.get(`${AuthBaseUrl}/register/code`, {
    params,
  })
}
