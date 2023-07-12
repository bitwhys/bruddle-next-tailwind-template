import { useState } from 'react'
import Icon from '@/components/Icon'
import Image from 'next/image'

import { messages } from '@/mocks/inbox'

type MessagesProps = {
  setVisible?: any
}

const Messages = ({ setVisible }: MessagesProps) => {
  const [activeId, setActiveId] = useState<string>('1')

  const handleClick = (id: string) => {
    setActiveId(id)
    setVisible(true)
  }

  return (
    <div className="flex w-[28rem] flex-col border-r border-n-1 dark:border-white 4xl:w-[23.125rem] lg:w-full lg:border-none">
      <div className="flex border-b border-n-1 p-5 dark:border-white">
        <button className="btn-purple btn-small mr-auto px-4">
          <Icon name="edit" />
          <span>Compose</span>
        </button>
        <button className="btn-stroke btn-small btn-square mr-1.5">
          <Icon name="filters" />
        </button>
        <button className="btn-stroke btn-small btn-square">
          <Icon name="search" />
        </button>
      </div>
      <div className="grow overflow-auto scroll-smooth">
        {messages.map(message => (
          <button
            className={`flex w-full border-b border-n-1 px-5 py-3 text-left transition-colors last:border-none hover:bg-n-3/5 dark:border-white dark:hover:bg-white/10 ${
              message.id === activeId ? '!bg-n-3/20 dark:!bg-white/20' : ''
            }`}
            key={message.id}
            onClick={() => handleClick(message.id)}
          >
            <div className="relative h-8 w-8">
              <Image className="rounded-full object-cover" src={message.avatar} fill alt="Avatar" />
            </div>
            <div className="w-[calc(100%-2rem)] pl-3">
              <div className="mb-1 flex justify-between text-xs font-medium text-n-3 dark:text-white/75">
                <div>{message.name}</div>
                <div>{message.time}</div>
              </div>
              <div className="truncate text-sm font-bold">{message.title}</div>
              <div className="truncate text-sm">{message.content}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Messages
