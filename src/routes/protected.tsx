import { Main } from '@/features/misc'
import { lazyImport } from '@/utils/lazyImport'

const { Home } = lazyImport(() => import('@/features/misc'), 'Home')
const { List } = lazyImport(() => import('@/features/misc'), 'List')
const { Outings } = lazyImport(() => import('@/features/outings'), 'Outings')

export const protectedRoutes = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'list',
        element: <List />,
        children: [
          {
            index: true,
            element: <Outings />
          }
        ]
      }
    ]
  }
]
