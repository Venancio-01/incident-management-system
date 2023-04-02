import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

const BasicLayout = () => {
  return (
    <div className="flex-col h-full">
      <Header></Header>
      <div className="flex-1 px-6 pb-8">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
export default BasicLayout
