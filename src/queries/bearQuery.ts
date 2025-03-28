import { useQuery } from '@tanstack/react-query'

import { getBearListAPI } from '@/apis/bear'

import { GetBearListRequest } from '@/types/request'

export const useBearListQuery = (request: GetBearListRequest) => {
  return useQuery({
    queryKey: ['bearList', request],
    queryFn: () => getBearListAPI(request),
  })
}
