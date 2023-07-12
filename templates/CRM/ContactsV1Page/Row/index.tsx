import { useState } from 'react'
import Checkbox from '@/components/Checkbox'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

type RowProps = {
  item: any
}

const Row = ({ item }: RowProps) => {
  const [value, setValue] = useState<boolean>(false)

  return (
    <tr className="">
      <td className="td-custom">
        <Checkbox value={value} onChange={() => setValue(!value)} />
      </td>
      <td className="td-custom">
        <div className="flex items-center text-sm font-bold">
          <div className="relative mr-3 h-7 w-7">
            <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
          </div>
          {item.name}
        </div>
      </td>
      <td className="td-custom">{item.email}</td>
      <td className="td-custom lg:hidden">{item.service}</td>
      <td className="td-custom text-right">
        <div className="relative inline-flex items-center pl-3.5 text-xs font-bold">
          <div
            className={`mr-1.5 h-2 w-2 rounded-full ${
              item.status === 'Away' ? 'bg-yellow-1' : item.status === 'Offline' ? 'bg-pink-1' : 'bg-green-1'
            }`}
          ></div>
          {item.status}
        </div>
      </td>
      <td className="td-custom text-right">
        <button className="btn-transparent-dark btn-small btn-square">
          <Icon name="dots" />
        </button>
      </td>
    </tr>
  )
}

export default Row
