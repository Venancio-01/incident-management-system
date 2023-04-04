import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs'
import { Button, Spin, ConfigProvider } from 'antd'
import { AuthLoader } from '@/lib/auth'
import { queryClient } from '@/lib/react-query'
import ThemeConfig from '@/themes/config.json'

const ErrorFallback = () => {
  return (
    <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}

const RenderLoading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spin />
    </div>
  )
}

const generateThemeConfig = () => {
  return {
    colorPrimary: ThemeConfig.primary
  }
}

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spin />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ConfigProvider
          theme={{
            token: generateThemeConfig()
          }}
        >
          <StyleProvider hashPriority="high">
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <AuthLoader renderLoading={RenderLoading}>
                  <Router>{children}</Router>
                </AuthLoader>
              </QueryClientProvider>
            </HelmetProvider>
          </StyleProvider>
        </ConfigProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
