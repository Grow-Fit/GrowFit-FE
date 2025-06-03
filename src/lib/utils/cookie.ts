export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${encodeURIComponent(name)}=`)
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift()
    return cookieValue ? decodeURIComponent(cookieValue) : null
  }
  return null
}

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}
