"use client"

import { useEffect, useState } from "react"

type DevToolsProps = {
  initialIsOpen?: boolean
}

const DevTools = () => {
  const [DevTools, setDevTools] = useState<React.ComponentType<DevToolsProps> | null>(null)

  useEffect(() => {
    const loadDevTools = async () => {
      try {
        const { ReactQueryDevtools } = await import("@tanstack/react-query-devtools")
        setDevTools(() => ReactQueryDevtools)
      } catch (error) {
        console.error("Could not load React Query Devtools:", error)
      }
    }

    loadDevTools()
  }, [])

  if (!DevTools) {
    return null
  }

  return <DevTools initialIsOpen={false} />
}

export default DevTools
