import { createBrowserRouter } from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import { lazyLoad } from '@/utils'
import Home from '@/pages/home'
import Login from '@/pages/login'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'list',
        element: lazyLoad(() => import('@/pages/list')),
        children: [
          {
            index: true,
            element: lazyLoad(() => import('@/pages/list-one'))
          },
          {
            path: 'two',
            element: lazyLoad(() => import('@/pages/list-two'))
          }
        ]
      }
    ]
  },
  { path: '/login', element: <Login /> }
])

export default routes
