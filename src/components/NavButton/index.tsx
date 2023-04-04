type NavButtonProps = {
  children: React.ReactNode
  path: string
}

export const NavButton = ({ children, path }: NavButtonProps) => {
  const { pathname } = useLocation()

  const activeClassName = pathname === path ? 'border-primary bg-[#062a5b]' : ''

  return (
    <div className="h-[36px] leading-[36px] px-4 inline-flex relative mr-8 overflow-hidden cursor-pointer">
      <div
        className={`front absolute top-0 left-[8px] border-[1px] border-[#1165b5] h-full w-[16px] border-r-0 box-border ${activeClassName}`}
      ></div>
      <div className={`border-y-[1px] px-2 border-[#1165b5] tracking-widest ${activeClassName} z-[99]`}>{children}</div>
      <div
        className={`end absolute  top-0 right-[8px] border-[1px] border-[#1165b5] h-full w-[16px] border-l-0 box-border ${activeClassName}`}
      ></div>
    </div>
  )
}
