import { useState } from 'react'
import Checkbox from '@/components/Checkbox'

type TaskProps = {
  item: any
}

const Task = ({ item }: TaskProps) => {
  const [value, setValue] = useState<boolean>(item.isChecked)

  return (
    <div className="flex items-center border-b border-n-1/40 py-3 dark:border-white/40">
      <Checkbox className="mr-2.5 shrink-0" value={value} onChange={() => setValue(!value)} />
      <div className="mr-4 grow text-sm font-bold md:mr-0">{item.title}</div>
      <div className="label-stroke min-w-[6rem] shrink-0 md:hidden">{item.date}</div>
    </div>
  )
}

export default Task
