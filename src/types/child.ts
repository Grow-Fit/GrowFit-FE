// 1. 아이 로그인
export interface ChildLoginRequest {
  childId: string
  childPassword: string
}

// 2. 아이 회원가입
// [요청] 부모에서 생성된 큐알코드로 아이 아이디값 조회
export interface ChildInfoByQRCodeRequest {
  code: string
}
// [응답] 부모에서 생성된 큐알코드로 아이 아이디값 조회
export interface ChildInfoByQRCodeResponse {
  child_id: number
  child_name: string
  child_login_id: string
}
// [요청] 아이 회원가입시 - 파라미터(쿼리스트링)
export interface ChildJoinParams {
  child_id: number
}
// [요청] 아이 회원가입시 - body
export interface ChildJoinBody {
  childId: string
  childPassword: string
  nickname: string
}
// [응답] 아이 회원가입
export interface ChildJoinResponse {
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
