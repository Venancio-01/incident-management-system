import { useQuery } from '@tanstack/react-query'
import { request } from '@/lib/axios'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

export type LoginCredentialsDTO = {
  userName: string
  password: string
}

export const getReasons = (reasonId?: string) => {
  return request<unknown>({
    url: '/out/getReason',
    method: 'get',
    data: reasonId
  })
}

type QueryFnType = typeof getReasons

type ReasonOptions = {
  reasonId?: string
  config?: QueryConfig<QueryFnType>
}

export const useReasons = ({ reasonId, config }: ReasonOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['comments', reasonId],
    queryFn: () => getReasons(reasonId),
    ...config
  })
}
