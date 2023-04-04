import { useLocation } from 'react-router-dom'

type ListMenuProps = {
  menus: {
    title: string
    path: string
  }[]
}

const Dot = () => {
  return (
    <div className="w-[9px] h-[9px] bg-[#00B1FF] bg-opacity-[0.26] flex justify-center items-center">
      <div className="w-[5px] h-[5px] bg-[#00B1FF]"></div>
    </div>
  )
}

export const ListMenu = ({ menus }: ListMenuProps) => {
  const location = useLocation()
  const currentPath = location.pathname
  const activeClassName = 'bg-[url(@/assets/images/列表页选中背景.png)]'

  return (
    <ul className="w-[140px]">
      {menus.map((menu, index) => {
        return (
          <li
            key={index}
            className={`mb-2 cursor-pointer hover:bg-[url(@/assets/images/列表页选中背景.png)] ${currentPath === menu.path ? activeClassName : ''
              }`}
          >
            <div className="flex h-[40px]  items-center">
              <div className="flex justify-center items-center w-[32px]">
                <Dot></Dot>
              </div>
              {menu.title}
            </div>
            <div className="h-[1px] bg-gradient-to-r from-[#1266B5] via-[#00B1FF] to-[#1266B5] bg-opacity-[0.4]"></div>
          </li>
        )
      })}
    </ul>
  )
}
