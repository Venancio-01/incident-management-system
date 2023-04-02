import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div className="h-screen bg-[url(@/assets/images/背景.png)] bg-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
