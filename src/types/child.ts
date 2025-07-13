export interface ChildInfoByQRCodeRequest {
  code: string
}

export interface ChildInfoByQRCodeResponse {
  child_id: number
  child_name: string
  child_login_id: string
}
