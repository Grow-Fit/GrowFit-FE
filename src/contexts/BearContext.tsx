import { createContext, ReactNode,useContext, useState } from "react"

type BearContextType = {
  selectedBear: number
  setSelectedBear: (id: number) => void
}

const BearContext = createContext<BearContextType>({
  selectedBear: 0,
  setSelectedBear: () => {},
})

export const BearProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBear, setSelectedBear] = useState<number>(0)

  return (
    <BearContext.Provider value={{ selectedBear, setSelectedBear }}>
      {children}
    </BearContext.Provider>
  )
}

export const useBearContext = () => useContext(BearContext)
