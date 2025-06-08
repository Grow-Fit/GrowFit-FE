import { create } from "zustand"

type ParentLoginType = {
  nickname: string
  childName: string
  childGender: string
  childAge: number
  childHeight: number
  childWeight: number
}

type userStoreType = {
  parent: Partial<ParentLoginType>
  updateUser: (newData: Partial<ParentLoginType>) => void
}

export const useUserStore = create<userStoreType>((set) => ({
  parent: {
    nickname: "",
    childName: "",
    childGender: "",
    childAge: 0,
    childHeight: 0,
    childWeight: 0,
  },
  updateUser: (newData: Partial<ParentLoginType>) =>
    set((state) => ({
      ...state,
      parent: { ...state.parent, ...newData },
    })),
}))
