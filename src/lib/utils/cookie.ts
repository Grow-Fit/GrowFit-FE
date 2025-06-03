interface CookieOptions {
  expires?: Date
  maxAge?: number
  path?: string
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: "strict" | "lax" | "none"
}

// 쿠키 설정 함수
export const setCookie = (name: string, value: string, options: CookieOptions = {}): void => {
  let cookieString = `${name}=${encodeURIComponent(value)}`

  // 기본 옵션 설정
  const defaultOptions = {
    path: "/",
    secure: process.env.NODE_ENV === "production", // 프로덕션에서만 secure
    sameSite: "lax",
    ...options,
  }

  if (defaultOptions.expires) {
    cookieString += `; expires=${defaultOptions.expires.toUTCString()}`
  }

  if (defaultOptions.maxAge) {
    cookieString += `; max-age=${defaultOptions.maxAge}`
  }

  if (defaultOptions.path) {
    cookieString += `; path=${defaultOptions.path}`
  }

  if (defaultOptions.domain) {
    cookieString += `; domain=${defaultOptions.domain}`
  }

  if (defaultOptions.secure) {
    cookieString += `; secure`
  }

  if (defaultOptions.httpOnly) {
    cookieString += `; httponly`
  }

  if (defaultOptions.sameSite) {
    cookieString += `; samesite=${defaultOptions.sameSite}`
  }

  document.cookie = cookieString
}

// 쿠키 가져오기 함수
export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") {
    return null // 서버 사이드 렌더링 대응
  }

  const cookies: string[] = document.cookie.split(";")

  for (const cookie of cookies) {
    const [cookieName, cookieValue]: string[] = cookie.trim().split("=")
    if (cookieName === name) {
      return decodeURIComponent(cookieValue)
    }
  }

  return null
}

// 쿠키 삭제 함수
export const deleteCookie = (name: string, options: CookieOptions = {}): void => {
  const deleteOptions = {
    path: "/",
    expires: new Date(0), // 과거 날짜로 설정하여 삭제
    ...options,
  }

  setCookie(name, "", deleteOptions)
}

// 모든 쿠키 가져오기 함수 (선택사항)
export const getAllCookies = (): Record<string, string> => {
  if (typeof document === "undefined") {
    return {}
  }

  const cookies: Record<string, string> = {}
  document.cookie.split(";").forEach((cookie: string) => {
    const [name, value]: string[] = cookie.trim().split("=")
    if (name && value) {
      cookies[name] = decodeURIComponent(value)
    }
  })

  return cookies
}
