import { useState } from 'react'
import Link from 'next/link'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'
import Image from '@/components/Image'

type MailDesktopProps = {
  item: any
}

const MailDesktop = ({ item }: MailDesktopProps) => {
  const [value, setValue] = useState<boolean>(item.isChecked)

  return (
    <div className="flex items-start border-b border-n-1 p-4 text-sm last:border-none dark:border-white">
      <Checkbox className="mr-4 mt-1.5 shrink-0" value={value} onChange={() => setValue(!value)} />
      <Icon
        className={`icon-18 mr-4 mt-2 shrink-0 ${item.marker ? 'fill-yellow-1' : 'fill-n-1 dark:fill-white'}`}
        name={item.marker ? 'marker-fill' : 'marker'}
      />
      <div className="flex w-[14.7rem] shrink-0 items-center pr-4 font-bold">
        <div className="relative mr-3 h-8 w-8 shrink-0">
          <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
        </div>
        {item.name}
      </div>
      <Link className="grow truncate pt-1.5" href="/inbox/mail-compose">
        {item.content} <span className="text-n-3 dark:text-white/75">{item.theme}</span>
        {item.files && (
          <div className="-ml-4 mt-0.5 flex flex-wrap">
            {item.files.map((file: any, index: number) => (
              <div className="ml-4 mt-2 flex items-center text-xs font-bold" key={index}>
                <div
                  className={`mr-1.5 h-2 w-2 rounded-full ${
                    file.type === 'sketch'
                      ? 'bg-yellow-1'
                      : file.type === 'pdf'
                      ? 'bg-pink-1'
                      : file.type === 'docx'
                      ? 'bg-purple-1'
                      : 'bg-green-1'
                  }`}
                ></div>
                {file.name}
              </div>
            ))}
          </div>
        )}
      </Link>
      <div className="ml-4 w-28 shrink-0 pt-1.5 text-right font-medium">{item.time}</div>
      <button className="btn-transparent-dark btn-small btn-square ml-6 shrink-0">
        <Icon name="dots" />
      </button>
    </div>
  )
}

export default MailDesktop
