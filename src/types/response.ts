import { AxiosResponse } from "axios"

import { GetBearListType } from "./bear"

export interface BaseAPIResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface BaseResponse extends AxiosResponse {
  code: number
  message: string
}

export interface GetBearListResponse extends BaseResponse {
  data: GetBearListType
}
