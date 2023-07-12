import { useState } from 'react'
import Icon from '@/components/Icon'
import Checkbox from '@/components/Checkbox'
import Image from '@/components/Image'
import Details from '@/components/Details'

type TaskProps = {
  item: any
}

const Task = ({ item }: TaskProps) => {
  const [value, setValue] = useState<boolean>(item.isChecked)
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div className="flex items-center border-t border-n-1 px-4 py-4.5 dark:border-white">
        <Checkbox className="mr-2.5 shrink-0" value={value} onChange={() => setValue(!value)} />
        <div
          className="grow cursor-pointer text-sm font-bold transition-colors hover:text-purple-1"
          onClick={() => setVisible(true)}
        >
          {item.title}
        </div>
        <div className="mr-1.5 flex min-w-[3.5rem] shrink-0 items-center text-xs font-bold md:ml-2 md:mr-0 md:min-w-min">
          <Icon className="mr-1 dark:fill-white" name="comments" />
          {item.comments}
        </div>
        <div className="label-stroke mr-4 w-24 shrink-0 md:hidden">{item.date}</div>
        <div className="relative h-8 w-8 shrink-0 md:hidden">
          <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
        </div>
      </div>
      <Details
        title="Design a new dashboard for client"
        info="Task created on 7 Jun 2022"
        users={[
          '/images/avatars/avatar-5.jpg',
          '/images/avatars/avatar-6.jpg',
          '/images/avatars/avatar-7.jpg',
          '/images/avatars/avatar-8.jpg',
        ]}
        date="15 Aug 2023"
        category="Business"
        description="When I first got into the online advertising business, I was looking for the magical combination that would put my website"
        checklist={[
          {
            id: '0',
            title: 'Design new home page',
            isChecked: true,
          },
          {
            id: '1',
            title: 'Type to add more ...',
            isChecked: false,
          },
        ]}
        attachments={['/images/img-1.jpg', '/images/img-2.jpg']}
        visible={visible}
        onClose={() => setVisible(false)}
        markComplete
      />
    </>
  )
}

export default Task
