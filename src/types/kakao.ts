// types/kakao.ts
export interface KakaoAuthResponse {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  refresh_token_expires_in: number
}

export interface KakaoUserInfo {
  id: number
  connected_at: string
  kakao_account: {
    profile_nickname_needs_agreement: boolean
    profile: {
      nickname: string
      thumbnail_image_url?: string
      profile_image_url?: string
    }
    has_email: boolean
    email_needs_agreement: boolean
    is_email_valid: boolean
    is_email_verified: boolean
    email: string
  }
}

export interface LoginRequest {
  email: string
  provider: "kakao"
  kakaoAccessToken: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  user: {
    id: string
    email: string
    nickname: string
    profileImage?: string
  }
}
