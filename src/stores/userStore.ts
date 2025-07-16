import { create } from "zustand"

import { ParentJoinRequestType } from "@/types/parent"

type ChildRegisterType = {
  parentQRCode: string
  child_id: number
  childId: string
  childPw: string
  nickname: string
}

type userStoreType = {
  parent: Partial<ParentJoinRequestType>
  child: Partial<ChildRegisterType>
  updateParent: (newData: Partial<ParentJoinRequestType>) => void
  updateChild: (newData: Partial<ChildRegisterType>) => void
}

export const useUserStore = create<userStoreType>((set) => ({
  parent: {
    nickname: "",
    child_name: "",
    child_gender: "",
    child_age: 0,
    child_height: 0,
    child_weight: 0,
  },
  child: {
    child_id: 0, // api 요청시 사용되는 아이 아이디값
    childId: "",
    childPw: "",
    nickname: "",
  },
  updateParent: (newData: Partial<ParentJoinRequestType>) =>
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
