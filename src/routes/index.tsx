import { useRoutes } from 'react-router-dom'
import { useUser } from '@/lib/auth'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {
  const { data: token } = useUser()
  console.log('🚀 ~ file: index.tsx:7 ~ AppRoutes ~ token:', token)

  const routes = token ? protectedRoutes : publicRoutes
  const element = useRoutes(routes)

  return <>{element}</>
}
