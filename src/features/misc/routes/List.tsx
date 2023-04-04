import { Outlet } from 'react-router-dom'
import { NavButton } from '@/components/NavButton'
import { ListMenu } from '@/components/ListMenu'

const menus = [
  {
    title: '森林草原火灾',
    path: '/list'
  },
  {
    title: '生物灾害',
    path: '/list/1/2'
  }
]

export const List = () => {
  return (
    <div className="h-full flex flex-col px-6 pb-8">
      <div className="px-4 mb-4">
        <NavButton path="/list">外出事件</NavButton>
        <NavButton path="/list/2">自然灾害</NavButton>
      </div>
      <div className="flex bg-primary bg-opacity-[0.1] flex-1 pt-6">
        <div className="w-[154px] flex justify-center">
          <ListMenu menus={menus}></ListMenu>
        </div>
        <div className="w-[1px] bg-[#475D80] bg-opacity-[0.29] pt-[36px]"></div>
        <div className="flex-1 p-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
