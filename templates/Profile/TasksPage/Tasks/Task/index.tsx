import { useState } from 'react'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'
import Image from '@/components/Image'

type TaskProps = {
  item: any
}

const Task = ({ item }: TaskProps) => {
  const [value, setValue] = useState<boolean>(item.isChecked)

  return (
    <div className="flex items-center border-b border-n-1 px-5 py-4.5 last:border-none dark:border-white md:px-4">
      <Checkbox className="mr-2.5 shrink-0" value={value} onChange={() => setValue(!value)} />
      <div className="mr-4 grow text-sm font-bold md:mr-2">{item.title}</div>
      <div className="mr-2.5 flex min-w-[3.125rem] shrink-0 items-center justify-center text-xs font-bold md:hidden">
        <Icon className="mr-1 dark:fill-white" name="comments" />
        {item.comments}
      </div>
      <div className="label-stroke mr-4 min-w-[6rem] shrink-0 md:hidden">{item.date}</div>
      <div className="relative h-8 w-8 shrink-0">
        <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
      </div>
    </div>
  )
}

export default Task
