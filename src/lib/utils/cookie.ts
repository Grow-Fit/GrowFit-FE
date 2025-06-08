// 쿠키 가져오기 (로그인 상태 확인용)
export const getCookie = (name: string) => {
  if (typeof document === "undefined") return null // SSR 대응

  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const lastPart = parts[1]
    return lastPart ? lastPart.split(";")[0] : null
  }
  return null
}

// 쿠키 삭제하기 (로그아웃용)
export const deleteCookie = (name: string) => {
  if (typeof document === "undefined") return // SSR 대응

  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`
}

// 로그인 상태 확인
export const isLoggedIn = () => {
  return !!getCookie("accessToken")
}

// 로그아웃 처리 (모든 인증 관련 쿠키 삭제)
export const clearAuthCookies = () => {
  deleteCookie("accessToken")
  deleteCookie("refreshToken")
  deleteCookie("userEmail")
  deleteCookie("userId")
  deleteCookie("isUser")
}
