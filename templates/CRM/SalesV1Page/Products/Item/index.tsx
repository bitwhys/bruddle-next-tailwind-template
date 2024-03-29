import Image from '@/components/Image'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <div className="border-b border-n-1 p-4 last:border-none dark:border-white">
    <div className="mb-3 flex items-center justify-between">
      <div className="text-xs">{item.date}</div>
      <div className="label-green min-w-[4.6rem] lg:h-5">{item.status}</div>
    </div>
    <div className="flex items-center text-sm">
      <div className="w-15 border border-n-1">
        <Image className="w-full" src={item.image} width={60} height={42} alt="" />
      </div>
      <div className="grow pl-3">
        <div className="flex items-center justify-between font-bold">
          <div className="">{item.title}</div>
          <div className="">${item.amount}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">{item.color}</div>
          <div className="">{item.qty}</div>
        </div>
      </div>
    </div>
  </div>
)

export default Item
