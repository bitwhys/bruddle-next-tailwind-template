import Image from '@/components/Image'

import { connections } from '@/mocks/profile'

type ConnectionsProps = {}

const Connections = ({}: ConnectionsProps) => (
  <div className="-mx-3 -mt-10 flex flex-wrap md:m-0 md:block">
    {connections.map(item => (
      <div
        className="mx-3 mt-10 flex w-[calc(50%-1.5rem)] md:mx-0 md:mb-6 md:mt-0 md:w-full md:last:mb-0"
        key={item.id}
      >
        <div className="relative mr-3 h-15 w-15 shrink-0">
          <Image className="rounded-full object-cover" src={item.avatar} fill alt="" />
        </div>
        <div className="grow">
          <div className="-mt-1 font-bold">{item.man}</div>
          <div className="mb-0.5 text-sm">{item.position}</div>
          <div className="flex items-center">
            <div className="mr-1.5 w-4 shrink-0 p-0.25 text-0 dark:bg-white">
              <Image className="w-full" src={item.logo} width={16} height={16} alt="" />
            </div>
            <div className="text-sm font-medium">{item.company}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Connections
