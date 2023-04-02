import React from 'react'

interface Props {
  title: string
  icon?: string
  children: React.ReactNode
  className?: string
}

const DividingLine = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 border-b-1 border-primary border-opacity-[0.16]">
        <div className="border-b-4 border-x-4 border-x-transparent w-[20px] border-primary"></div>
      </div>

      <div className="ml-[4px] border-b-1 border-primary w-[13px]"></div>
    </div>
  )
}

const BasePanel: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div
      className={`border border-solid border-primary border-opacity-[0.16] bg-gradient-to-t from-[#020C1C] from-opacity-[0.16] to-[#004892] to-opacity-[0.16] bg-opacity-[0.16] py-3 px-4 box-border ${className}`}
    >
      <div className="text-title text-[16px]">{title}</div>
      <DividingLine></DividingLine>
      {children}
    </div>
  )
}

export default BasePanel
