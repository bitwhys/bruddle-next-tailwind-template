import { useState } from 'react'
import Icon from '@/components/Icon'
import Checkbox from '@/components/Checkbox'
import Image from '@/components/Image'

type AddTaskProps = {}

const AddTask = ({}: AddTaskProps) => {
  const [value, setValue] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  return (
    <div className="flex items-center p-4">
      <Checkbox className="mr-2.5 shrink-0" value={value} onChange={() => setValue(!value)} />
      <input
        className="h-6 grow border-none bg-transparent pr-4 text-sm font-bold text-n-1 outline-none placeholder:text-n-1 dark:text-white dark:placeholder:text-white"
        type="text"
        placeholder="Type to add a new task …"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <button className="btn-stroke btn-small mr-4 h-6 w-24 shrink-0">Set date</button>
      <div className="relative h-8 w-8 shrink-0 md:hidden">
        <Image className="rounded-full object-cover" src="/images/avatars/avatar.jpg" fill alt="Avatar" />
      </div>
    </div>
  )
}

export default AddTask
