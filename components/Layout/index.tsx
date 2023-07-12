import Head from 'next/head'
import Image from '@/components/Image'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from './Menu'

type LayoutProps = {
  background?: boolean
  back?: boolean
  title?: string
  children: React.ReactNode
}

const Layout = ({ background, back, title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Bruddle</title>
      </Head>
      <div className="relative pl-[18.75rem] xl:pl-20 md:pb-20 md:pl-0">
        <Sidebar />
        <div className="flex min-h-screen flex-col pt-18 md:min-h-[calc(100vh-5rem)] md:pt-0">
          <Header back={back} title={title} />
          <div className="flex grow">
            <div className="mx-auto flex max-w-[90rem] grow flex-col px-16 pb-2 pt-6 4xl:max-w-full 2xl:px-8 lg:px-6 md:px-5">
              {children}
            </div>
          </div>
          <Footer />
          {background && (
            <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden dark:opacity-70">
              <div className="absolute inset-0 z-1 bg-n-1 opacity-0 dark:opacity-80"></div>
              <div className="absolute left-[40vw] top-1/2 w-[85vw] -translate-y-[72%] rotate-180 4xl:w-[85rem] xl:-top-[20rem] xl:left-[30vw] xl:w-[60rem] xl:-translate-y-0 md:-top-[13rem] md:left-[15vw] md:w-[40rem]">
                <Image className="w-full" src="/images/bg.svg" width={1349} height={1216} alt="" />
              </div>
            </div>
          )}
        </div>
        <Menu />
      </div>
    </>
  )
}

export default Layout
