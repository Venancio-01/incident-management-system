import { useMutation } from '@tanstack/react-query'

import { axios } from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'

import { Discussion } from '../types'

export type CreateDiscussionDTO = {
  data: {
    title: string
    body: string
  }
}

export const createDiscussion = ({ data }: CreateDiscussionDTO): Promise<Discussion> => {
  return axios.post(`/discussions`, data)
}

type UseCreateDiscussionOptions = {
  config?: MutationConfig<typeof createDiscussion>
}

export const useCreateDiscussion = ({ config }: UseCreateDiscussionOptions = {}) => {
  return useMutation({
    onMutate: async newDiscussion => {
      await queryClient.cancelQueries('discussions')

      const previousDiscussions = queryClient.getQueryData<Discussion[]>('discussions')

      queryClient.setQueryData('discussions', [...(previousDiscussions || []), newDiscussion.data])

      return { previousDiscussions }
    },
    onError: (_, __, context: any) => {
      if (context?.previousDiscussions) {
        queryClient.setQueryData('discussions', context.previousDiscussions)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('discussions')
    },
    ...config,
    mutationFn: createDiscussion
  })
}
