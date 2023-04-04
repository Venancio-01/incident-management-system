import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'
import { MainLayout } from '@/components/Layout'

export const Main = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spin />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}
