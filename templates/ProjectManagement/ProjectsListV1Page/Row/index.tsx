import { useState } from 'react'
import Link from 'next/link'
import Checkbox from '@/components/Checkbox'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Users from '@/components/Users'

type RowProps = {
  item: any
}

const Row = ({ item }: RowProps) => {
  const [value, setValue] = useState<boolean>(false)

  return (
    <div className="flex items-center border-b border-n-1 p-4 last:border-none dark:border-white">
      <Checkbox className="mr-4.5 shrink-0" value={value} onChange={() => setValue(!value)} />
      <Link
        className="flex grow items-center text-sm font-bold transition-colors hover:text-purple-1"
        href="/projects/projects-details"
      >
        <div className="relative mr-3 h-8 w-8 rounded-full bg-background p-2">
          <Image className="w-full" src={item.logo} width={16} height={16} alt="Logo" />
        </div>
        {item.title}
      </Link>
      <div className="mr-6 flex shrink-0 items-center">
        <Icon className="mr-1 dark:fill-white" name="tasks" />
        <div className="mr-1 w-12 text-xs font-bold">
          {item.tasksDone}/{item.tasksAll}
        </div>
        <div
          className="relative h-1 w-14"
          style={{
            backgroundColor: item.tasksColor || '#98E9AB',
          }}
        >
          <div
            className="absolute bottom-0 left-0 top-0 bg-n-1/30"
            style={{
              width: (item.tasksDone / item.tasksAll) * 100 + '%',
            }}
          ></div>
        </div>
      </div>
      <div className="mr-2 flex w-10 shrink-0 items-center text-xs font-bold">
        <Icon className="mr-1 dark:fill-white" name="comments" />
        {item.comments}
      </div>
      <div className="mr-2 flex w-10 shrink-0 items-center text-xs font-bold">
        <Icon className="mr-1 dark:fill-white" name="attached" />
        {item.files}
      </div>
      <div className="label-stroke mr-4.5 min-w-[6rem] shrink-0">{item.date}</div>
      <Users className="mr-3 shrink-0" items={item.users} large border />
      <button className="btn-transparent-dark btn-small btn-square shrink-0">
        <Icon name="dots" />
      </button>
    </div>
  )
}

export default Row
