export interface ChildInfoByQRCodeRequest {
  code: string
}

export interface ChildInfoByQRCodeResponse {
  child_id: number
  child_name: string
  child_login_id: string
}

export interface ChildJoinParamsType {
  child_id: number
}

export type ChildJoinBodyType = {
  childId: string
  childPassword: string
  nickname: string
}

export type ChildJoinResponse = {
  id: number
  code: string
  child_name: string
  child_gender: string
  child_age: number
  child_BodyInfo: {
    id: number
    height: number
    weight: number
    bmi: number
    createdAt: string
  }
}
