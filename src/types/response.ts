import { AxiosResponse } from 'axios'

import { GetBearListType } from './bear'

interface BaseResponse extends AxiosResponse {
  code: number
  message: string
}

export interface GetBearListResponse extends BaseResponse {
  data: GetBearListType
}
