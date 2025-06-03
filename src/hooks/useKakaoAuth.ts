import { useState } from "react"

export const useKakaoAuth = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleKakaoLogin = () => {
    try {
      setIsLoading(true)

      const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      const redirectUri = encodeURIComponent(`${baseUrl}/oauth/callback/kakao`)
      const scope = encodeURIComponent("account_email")
      const state = encodeURIComponent(
        JSON.stringify({
          returnUrl: "https://localhost:3000/join/parent/1",
        })
      )

      const oauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}`

      window.location.href = oauthUrl
    } catch (error) {
      console.error("카카오 로그인 에러:", error)
      alert("로그인 중 오류가 발생했습니다.")
      setIsLoading(false)
    }
  }

  const handleKakaoLogout = () => {
    // 쿠키 삭제
    document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = "isUser=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"

    window.location.href = "/login"
  }

  return {
    handleKakaoLogin,
    handleKakaoLogout,
    isLoading,
  }
}
