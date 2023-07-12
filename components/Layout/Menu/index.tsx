import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'

import { navigationMobile } from '@/constants/navigation'
import { twMerge } from 'tailwind-merge'

type MenuProps = {}

const Menu = ({}: MenuProps) => {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 hidden items-center justify-between border-t border-n-1 bg-background px-3 dark:border-white dark:bg-n-2 md:flex">
      {navigationMobile.map((link: any, index: number) =>
        link.url ? (
          <Link className="flex h-18 w-12 items-center justify-center tap-highlight-color" href={link.url} key={index}>
            <Icon
              className={`icon-22 transition-colors dark:fill-white ${
                router.pathname === link.url && '!fill-purple-1'
              }`}
              name={link.icon}
            />
          </Link>
        ) : (
          <button className="flex h-18 w-12 items-center justify-center" key={index}>
            <Icon
              className={`icon-22 transition-colors dark:fill-white ${
                router.pathname === link.url || (router.pathname.startsWith(link.url) ? '!fill-purple-1' : '')
              }`}
              name={link.icon}
            />
          </button>
        ),
      )}
    </div>
  )
}

export default Menu
