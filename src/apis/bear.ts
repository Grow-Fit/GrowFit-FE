import { GetBearListRequest } from '@/types/request'
import { GetBearListResponse } from '@/types/response'

import { axiosInstance } from './axiosInstance'

export const getBearListAPI = async (request: GetBearListRequest): Promise<GetBearListResponse> => {
  const params = {
    page: request.page,
    size: request.size,
  }
  try {
    const response = await axiosInstance.get('/api/bears', {
      params,
    })

    if (response.status === 200) {
      return response.data
    } else throw new Error(response.data)
  } catch (error) {
    throw error
  }
}
