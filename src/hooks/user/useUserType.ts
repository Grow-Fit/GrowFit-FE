import { useEffect, useState } from "react"

export function useUserType() {
  const [userType, setUserType] = useState<string | undefined>()

  useEffect(() => {
    const stored = localStorage.getItem("userType")
    setUserType(stored ?? undefined)
  }, [])

  return userType
}
