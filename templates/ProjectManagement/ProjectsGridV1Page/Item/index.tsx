import { useState } from 'react'
import Link from 'next/link'
import Checkbox from '@/components/Checkbox'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Users from '@/components/Users'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => {
  const [value, setValue] = useState<boolean>(false)

  return (
    <div className="card relative mx-2.5 mt-5 w-[calc(33.333%-1.25rem)] px-5 py-8 text-center lg:w-[calc(50%-1.25rem)] md:mt-2.5 md:w-[calc(100%-1.25rem)] md:py-6">
      <Checkbox className="!absolute left-5 top-5 md:hidden" value={value} onChange={() => setValue(!value)} />
      <button className="btn-transparent-dark btn-small btn-square absolute right-3 top-4 md:hidden">
        <Icon name="dots" />
      </button>
      <div className="mx-auto mb-4 h-[4.25rem] w-[4.25rem] rounded-full bg-background p-5">
        <Image className="w-full" src={item.logo} width={30} height={30} alt="Logo" />
      </div>
      <Link
        className="mb-3 block text-h6 transition-colors hover:text-purple-1 md:mb-2"
        href="/projects/projects-details"
      >
        {item.title}
      </Link>
      <div className="label-stroke-green mb-6 min-w-[6rem] md:mb-4">{item.date}</div>
      <div className="mb-9 flex items-center justify-center space-x-2 md:mb-0">
        <div className="flex items-center text-xs font-bold">
          <Icon className="mr-1 dark:fill-white" name="email-2" />
          {item.emails}
        </div>
        <div className="flex items-center text-xs font-bold">
          <Icon className="mr-1 dark:fill-white" name="clock" />
          {item.percent}%
        </div>
        <div className="flex items-center text-xs font-bold">
          <Icon className="mr-1 dark:fill-white" name="save" />
          {item.counters}
        </div>
      </div>
      <Users className="shrink-0 justify-center md:hidden" items={item.users} large border />
    </div>
  )
}

export default Item
