export type NicknameType = {
  nickname: string
}
export type ChildInfoType = {
  child_name: string
  child_gender: string
  child_age: number
  child_height: number
  child_weight: number
}
export type ParentJoinRequestType = NicknameType & ChildInfoType
