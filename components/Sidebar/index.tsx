import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Menu from './Menu'
import TeamMembers from './TeamMembers'

type SidebarProps = {}

const Sidebar = ({}: SidebarProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div
      className={`fixed bottom-0 left-0 top-0 flex w-[18.75rem] flex-col overflow-auto scroll-smooth bg-n-1 px-8 pb-4.5 pt-6 xl:z-30 md:hidden ${
        visible ? 'w-[18.75rem]' : 'xl:w-20'
      }`}
    >
      <div className="mb-11 flex h-[1.625rem] items-center justify-between">
        <Logo className={visible ? 'flex' : 'xl:hidden'} light />
        <button className="hidden xl:flex" onClick={() => setVisible(!visible)}>
          <Icon className="fill-white" name={visible ? 'close' : 'burger'} />
        </button>
      </div>
      <Menu visible={visible} />
      <TeamMembers visible={visible} />
      <div className={`mx-0 mt-auto flex h-18 items-center pt-10 ${visible ? 'mx-0' : 'xl:-mx-4'}`}>
        <Link
          className={`inline-flex items-center text-sm font-bold text-white transition-colors hover:text-purple-1 ${
            visible ? 'mx-0 text-sm' : 'xl:mx-auto xl:text-0'
          }`}
          href="/profile"
        >
          <div className={`relative mr-2.5 h-5.5 w-5.5 overflow-hidden rounded-full ${visible ? 'mr-2.5' : 'xl:mr-0'}`}>
            <Image className="scale-105 object-cover" src="/images/avatars/avatar.jpg" fill alt="Avatar" />
          </div>
          Henry Richardson
        </Link>
        <button className={`btn-transparent-light btn-small btn-square ml-auto ${visible ? 'flex' : 'xl:hidden'}`}>
          <Icon name="dots" />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
