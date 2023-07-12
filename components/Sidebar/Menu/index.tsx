import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'

import { navigation } from '@/constants/navigation'
import { twMerge } from 'tailwind-merge'

type MenuProps = {
  visible?: boolean
}

const Menu = ({ visible }: MenuProps) => {
  const router = useRouter()

  return (
    <>
      <div
        className={`mb-3 overflow-hidden whitespace-nowrap text-xs font-medium text-white/50 ${
          visible ? 'w-full opacity-100' : 'xl:w-0 xl:opacity-0'
        }`}
      >
        Navigation
      </div>
      <div className="-mx-4 mb-10">
        {navigation.map((link: any, index: number) => (
          <Link
            className={twMerge(
              `mb-2 flex h-9.5 items-center fill-white px-4 text-sm font-bold text-white transition-colors last:mb-0 hover:bg-n-2 ${
                router.pathname === link.url && 'bg-n-2 fill-purple-1 text-purple-1'
              } ${visible ? 'text-sm' : 'xl:text-0'}`,
            )}
            href={link.url}
            key={index}
          >
            <Icon className={`mr-3 fill-inherit ${visible ? 'mr-3' : 'xl:mr-0'}`} name={link.icon} />
            {link.title}
            {link.counter && (
              <div
                className={`ml-auto min-w-[1.625rem] px-1 py-0.25 text-center text-xs font-bold text-n-1 ${
                  visible ? 'block' : 'xl:hidden'
                }`}
                style={{
                  backgroundColor: link.counterColor || '#AE7AFF',
                }}
              >
                {link.counter}
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Menu
