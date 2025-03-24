import { GetBearListRequest } from '@/types/request'
import { getBearListAPI } from '@/apis/bear'
import { useQuery } from '@tanstack/react-query'

export const useBearListQuery = (request: GetBearListRequest) => {
  return useQuery({
    queryKey: ['bearList', request],
    queryFn: () => getBearListAPI(request),
  })
}
