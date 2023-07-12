import { useState } from 'react'
import Link from 'next/link'
import Checkbox from '@/components/Checkbox'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => {
  const [value, setValue] = useState<boolean>(false)

  return (
    <Link
      className="card mx-2.5 mt-5 flex w-[calc(25%-1.25rem)] flex-col text-center lg:w-[calc(50%-1.25rem)] md:mt-3 md:w-[calc(100%-1.25rem)]"
      href="/crm/customers-details"
    >
      <div className="relative grow px-5 pb-7 pt-12 md:pb-4 md:pt-4">
        <Checkbox className="!absolute left-5 top-5 md:hidden" value={value} onChange={() => setValue(!value)} />
        <button className="btn-transparent-dark btn-small btn-square absolute right-3 top-4 md:hidden">
          <Icon name="dots" />
        </button>
        <div className="relative mx-auto mb-3.5 h-[4.25rem] w-[4.25rem]">
          <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
        </div>
        <div className="text-sm font-bold">{item.name}</div>
        <div className="mb-4 text-xs font-medium">{item.email}</div>
        <div className={`label-green min-w-[5.25rem] ${item.status === 'Pending' ? 'label-yellow' : ''}`}>
          {item.status}
        </div>
      </div>
      <div className="flex border-t border-n-1 dark:border-white">
        <div className="flex-1 border-r border-n-1 p-3 dark:border-white">
          <div className="text-sm font-bold">${item.sales}</div>
          <div className="text-xs font-medium text-n-3 dark:text-white/75">Sales</div>
        </div>
        <div className="flex-1 p-3">
          <div className="text-sm font-bold">{item.count}</div>
          <div className="text-xs font-medium text-n-3 dark:text-white/75">Count</div>
        </div>
      </div>
    </Link>
  )
}

export default Item
