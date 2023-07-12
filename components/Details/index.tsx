import { useState } from 'react'
import Modal from '@/components/Modal'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import Comment from '@/components/Comment'
import Checklist from './Checklist'
import Attachments from './Attachments'

type DetailsProps = {
  visible: boolean
  onClose: () => void
  markComplete?: boolean
  time?: string
  title: string
  info: string
  users: Array<string>
  date: string
  category: string
  description: string
  checklist?: any
  attachments?: any
}

const Details = ({
  visible,
  onClose,
  markComplete,
  time,
  title,
  info,
  users,
  date,
  category,
  description,
  checklist,
  attachments,
}: DetailsProps) => {
  const [complete, setComplete] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <Modal classWrap="pt-6 px-5 pb-8" visible={visible} onClose={onClose}>
      <div className="mb-8 flex items-center justify-between pr-8">
        {markComplete && <Checkbox value={complete} onChange={() => setComplete(!complete)} label="Mark as complete" />}
        {time && <div className="label-black -mt-1">{time}</div>}
        <button className="btn-transparent-dark btn-small btn-square -mt-0.5 h-5 w-5 outline-none">
          <Icon name="dots" />
        </button>
      </div>
      <div className="mb-0.5 text-h4">{title}</div>
      <div className="text-sm">{info}</div>
      <div className="mt-8 flex justify-between md:mt-6 md:block">
        <div className="md:mb-6">
          <div className="mb-2 text-xs font-medium">Assigned to</div>
          <div className="flex items-center">
            {users.map((user: any, index: number) => (
              <div className="relative mr-1 h-9 w-9" key={index}>
                <Image className="rounded-full object-fill" src={user} fill alt="Avatar" />
              </div>
            ))}
            <button className="group ml-2">
              <Icon className="icon-18 fill-n-3 transition-colors group-hover:fill-purple-1" name="add-circle" />
            </button>
          </div>
        </div>
        <div className="">
          <div className="mb-4.5 text-xs font-medium">Due to</div>
          <div className="flex items-center">
            <div className="label-stroke mr-3">{date}</div>
            <div className="flex items-center text-xs font-medium">
              <Icon className="icon-18 mr-1.5 fill-yellow-1" name="marker-fill" />
              {category}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t border-dashed border-n-1 pt-4 dark:border-white">
        <div className="mb-1 font-bold">Description</div>
        <div className="text-sm">{description}</div>
      </div>
      {checklist && <Checklist checklist={checklist} />}
      {attachments && <Attachments images={attachments} />}
      <Comment
        className="mt-8 shadow-none"
        placeholder="Type to add your comment"
        value={value}
        setValue={(e: any) => setValue(e.target.value)}
      />
    </Modal>
  )
}

export default Details
