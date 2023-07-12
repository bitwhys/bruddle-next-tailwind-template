import { useState } from 'react'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'
import Image from '@/components/Image'

type MessageProps = {
  user: string
  email: string
  avatar: string
  date: string
  time: string
  content?: any
  images?: Array<string>
}

const Message = ({ user, email, avatar, date, time, content, images }: MessageProps) => {
  return (
    <div className="text-sm">
      <div className="flex items-start md:flex-wrap">
        <div className="flex items-center">
          <div className="relative mr-3 h-8 w-8 shrink-0">
            <Image className="rounded-full object-cover" src={avatar} fill alt="Avatar" />
          </div>
          <div>
            <div className="font-bold">{user}</div>
            <div className="text-n-3 dark:text-white/50">
              {email} to <span className="text-n-1">me</span>
            </div>
          </div>
        </div>
        <div className="ml-auto pt-0.75 text-xs font-medium md:ml-11 md:w-full">
          {date} <span className="relative -top-0.5 mx-2.5 inline-block h-0.5 w-0.5 bg-n-1 dark:bg-white"></span>
          {time}
        </div>
      </div>
      <div className="mt-3">{content}</div>
      {images && (
        <div className="-ml-2 mt-1 flex flex-wrap md:-mx-1">
          {images.map((image: any, index: number) => (
            <div
              className="relative ml-2 mt-2 h-[7.75rem] w-[10.375rem] border border-n-1 md:mx-1 md:w-[calc(50%-0.5rem)]"
              key={index}
            >
              <Image className="ounded-sm object-cover" src={image} fill alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Message
