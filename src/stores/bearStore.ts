import { create } from "zustand"

type BearStoreType = {
  bears: number
  increaseBears: () => void
  decreaseBears: () => void
}

export const useBearStore = create<BearStoreType>((set) => ({
  bears: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
}))
