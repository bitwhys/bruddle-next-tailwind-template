import Link from 'next/link'
import Image from '@/components/Image'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <Link
    className="flex items-center border-b border-n-1 px-4 py-3 last:border-none dark:border-white"
    href="/crm/customers-details"
  >
    <div className="relative h-8 w-8">
      <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
    </div>
    <div className="grow">
      <div className="pl-3.5">
        <div className="flex justify-between text-sm font-bold">
          <div>{item.name}</div>
          <div>${item.price}</div>
        </div>
        <div className="flex justify-between text-xs">
          <div>{item.date}</div>
          <div>{item.product}</div>
        </div>
      </div>
    </div>
  </Link>
)

export default Item
