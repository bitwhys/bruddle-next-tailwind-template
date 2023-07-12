import Image from '@/components/Image'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <div className="flex items-center border-b border-n-1 px-4 py-3.5 last:border-none dark:border-white" key={item.id}>
    <div className="relative h-7 w-7 shrink-0">
      <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
    </div>
    <div className="mr-auto w-[calc(100%-4.8rem)] px-3">
      <div className="truncate text-sm font-bold">{item.name}</div>
      <div className="truncate text-xs">{item.email}</div>
    </div>
    <div className="flex shrink-0 items-center justify-end self-end text-xs font-bold">
      <div
        className={`mr-1.5 h-2 w-2 rounded-full ${
          item.status === 'Away' ? 'bg-yellow-1' : item.status === 'Offline' ? 'bg-pink-1' : 'bg-green-1'
        }`}
      ></div>
      {item.status}
    </div>
  </div>
)

export default Item
