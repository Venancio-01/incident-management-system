import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/home'
import Login from '@/pages/login'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  { path: '/login', element: <Login /> }
])

export default routes
