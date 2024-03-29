import { useState } from 'react'
import Details from '@/components/Details'

type TaskProps = {
  className?: string
  classTitle?: string
  item: any
  time?: string
}

const Task = ({ className, classTitle, item, time }: TaskProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <button
        className={`relative flex w-full items-center bg-background py-1 pl-2.5 pr-4 text-xs outline-none transition-colors last:mb-0 hover:text-purple-2 dark:bg-n-2 ${className}`}
        onClick={() => setVisible(true)}
      >
        <div
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            item.color === 'green' ? 'bg-green-1' : item.color === 'yellow' ? 'bg-yellow-1' : 'bg-purple-1'
          }`}
        ></div>
        {time && <div className="ml-2.5 mr-3 min-w-[3.3rem] text-left text-n-3 dark:text-white/75">{time}</div>}
        <div className={`ml-2 truncate text-xs font-bold ${classTitle}`}>{item.title}</div>
      </button>
      <Details
        title="Design a new dashboard for client"
        info="Task created on 7 Jun 2022"
        time="7:30 am"
        users={[
          '/images/avatars/avatar-5.jpg',
          '/images/avatars/avatar-6.jpg',
          '/images/avatars/avatar-7.jpg',
          '/images/avatars/avatar-8.jpg',
        ]}
        date="15 Aug 2023"
        category="Business"
        description="When I first got into the online advertising business, I was looking for the magical combination that would put my website"
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

export default Task
