import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import Create from './Create'
import Apps from './Apps'

type HeaderProps = {
  back?: boolean
  title?: string
}

const Header = ({ back, title }: HeaderProps) => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false)
  const router = useRouter()

  useScrollPosition(({ currPos }) => {
    setHeaderStyle(currPos.y <= -1)
  })

  return (
    <header
      className={`fixed left-[18.75rem] right-0 top-0 z-20 border-b border-n-1 dark:border-white xl:left-20 md:relative md:left-0 ${
        headerStyle ? 'bg-background dark:bg-n-2 md:!bg-transparent' : ''
      }`}
    >
      <div className="m-auto flex h-18 w-full max-w-[90rem] items-center px-16 2xl:px-8 lg:px-6 md:px-5">
        {back && (
          <button
            className="btn-stroke btn-square btn-medium mr-6 shrink-0 2xl:mr-4 md:mr-3 md:h-6 md:!w-6"
            onClick={() => router.back()}
          >
            <Icon name="arrow-prev" />
          </button>
        )}
        {title && <div className="mr-4 truncate text-h3 md:mr-2 md:text-h4">{title}</div>}
        <div className="ml-auto flex shrink-0 items-center">
          <button className="btn-transparent-dark btn-square btn-medium mr-2 md:h-6 md:!w-6">
            <Icon name="search" />
          </button>
          <button className="btn-transparent-dark btn-square btn-medium relative mr-2 md:h-6 md:w-6">
            <Icon name="notification" />
            <div className="absolute right-[0.5625rem] top-1.5 h-2 w-2 rounded-full border border-white bg-green-1 dark:border-n-2 md:right-[0.5rem] md:top-0.5"></div>
          </button>
          <Apps />
          <Create />
          <button className="relative ml-1 hidden h-8 w-8 md:block">
            <Image className="rounded-full object-cover" src="/images/avatars/avatar.jpg" fill alt="Avatar" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
