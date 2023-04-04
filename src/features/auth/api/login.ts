import { request } from '@/lib/axios'

import { TokenProps } from '../types'

export type LoginCredentialsDTO = {
  userName: string
  password: string
}

export const loginWithUsernameAndPassword = (data: LoginCredentialsDTO) => {
  return request<TokenProps>({
    url: '/login',
    method: 'POST',
    data
  })
}
