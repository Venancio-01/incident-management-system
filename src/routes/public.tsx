import { lazyImport } from '@/utils/lazyImport'
import { Main } from '@/features/misc'

const { Login } = lazyImport(() => import('@/features/auth/routes/Login'), 'Login')

export const publicRoutes = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  }
]
