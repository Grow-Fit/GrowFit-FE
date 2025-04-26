import { BearType } from "@/types/bear"

export const countTotalBears = (list: BearType[]) => {
  return list.reduce((sum, item) => sum + item.bears, 0)
}

export const formatBearCount = (count: number) => {
  return `${count} 마리의 곰`
}
