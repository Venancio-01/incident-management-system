import { configureAuth } from 'react-query-auth'

import { loginWithUsernameAndPassword, LoginCredentialsDTO } from '@/features/auth'
import storage from '@/utils/storage'

async function userFn() {
  const token = storage.getToken()
  return token
}

async function loginFn(data: LoginCredentialsDTO) {
  const token = await loginWithUsernameAndPassword(data)
  storage.setToken(token)
  return token
}

async function logoutFn() {
  storage.clearToken()
  window.location.assign(window.location.origin as unknown as string)
}

const authConfig = {
  userFn,
  loginFn,
  logoutFn,
  registerFn: () => {
    return null
  }
}

export const { useUser, useLogin, useLogout, AuthLoader } = configureAuth<string | null, unknown, LoginCredentialsDTO, unknown>(authConfig)
