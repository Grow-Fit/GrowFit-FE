import { create } from "zustand"

type ParentRegisterType = {
  nickname: string
  childName: string
  childGender: string
  childAge: number
  childHeight: number
  childWeight: number
}
type ChildRegisterType = {
  parentQRCode: string
  childId: string
  childPw: string
  nickname: string
}

type userStoreType = {
  parent: Partial<ParentRegisterType>
  child: Partial<ChildRegisterType>
  updateParent: (newData: Partial<ParentRegisterType>) => void
  updateChild: (newData: Partial<ChildRegisterType>) => void
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
  child: {
    parentQRCode: "",
    childId: "",
    childPw: "",
    nickname: "",
  },
  updateParent: (newData: Partial<ParentRegisterType>) =>
    set((state) => ({
      ...state,
      parent: { ...state.parent, ...newData },
    })),
  updateChild: (newData: Partial<ChildRegisterType>) =>
    set((state) => ({
      ...state,
      child: { ...state.child, ...newData },
    })),
}))
