import { Menu, Transition } from '@headlessui/react'
import Icon from '@/components/Icon'

import { apps } from '@/mocks/apps'

type AppsProps = {}

const Apps = ({}: AppsProps) => {
  return (
    <Menu className="relative mr-7 md:hidden" as="div">
      <Menu.Button className="btn-transparent-dark btn-medium ui-open:fill-purple-1 ui-open:text-purple-1">
        <Icon className="-mt-0.25" name="puzzle" />
        <span>Apps</span>
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="shadow-primary-4 absolute -right-[9.8rem] top-full mt-2.5 w-[24.25rem] rounded-sm border border-n-1 bg-white dark:border-white dark:bg-n-1">
          <div className="flex flex-wrap justify-between px-7 py-4">
            {apps.map(link => (
              <Menu.Item
                className="flex h-[5.25rem] w-[5.25rem] flex-col items-center justify-center rounded-sm text-sm font-bold transition-colors hover:bg-purple-1/20 dark:hover:bg-white/20"
                key={link.id}
                as="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="icon-28 mb-2.5 dark:fill-white" name={link.icon} />
                {link.title}
              </Menu.Item>
            ))}
          </div>
          <button className="h-13 w-full border-t border-n-1 text-base font-bold transition-colors hover:text-purple-1 dark:border-white">
            See all available apps
          </button>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Apps
