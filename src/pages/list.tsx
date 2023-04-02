import { Outlet } from 'react-router-dom'
import { Button } from 'antd'

const List = () => {
  return (
    <div className="h-full flex-col">
      <div>
        <Button>社会安全事件</Button>
        <Button>自然灾害</Button>
        <Button>事故灾难</Button>
        <Button>公共卫生事件</Button>
      </div>
      <div className="flex bg-primary bg-opacity-[0.1] flex-1 pt-6">
        <ul className="w-[150px] border-r-1 border-[#475D80]">
          <li>森林草原火灾</li>
          <li>生物灾害</li>
        </ul>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default List
