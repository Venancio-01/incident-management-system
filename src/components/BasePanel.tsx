import React from 'react'
import DividingLine from '@/assets/images/分割线.png'

interface Props {
  title: string
  icon: string
  children: React.ReactNode
  className?: string
}

const BasePanel: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div
      className={`border border-solid border-[#00B1FF] border-opacity-[0.16] bg-gradient-to-t from-[#020C1C] from-opacity-[0.16] to-[#004892] to-opacity-[0.16] bg-opacity-[0.16] p-4 box-border ${className}`}
    >
      <div className="">{title}</div>
      <img src={DividingLine} alt="分割线" />

      {children}
    </div>
  )
}

export default BasePanel
