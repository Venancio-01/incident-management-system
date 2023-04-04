import Head from '../Head'
type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen bg-[url(@/assets/images/背景.png)] bg-center flex flex-col">
      <Head></Head>
      <div className="flex-1">{children}</div>
    </div>
  )
}
