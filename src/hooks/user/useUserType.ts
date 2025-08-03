import { useEffect, useState } from "react"

export function useUserType() {
  const [userType, setUserType] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("userType")
    setUserType(stored ?? undefined)
  }, [])

  return userType
}
