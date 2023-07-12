import Link from 'next/link'
import Image from '@/components/Image'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <Link
    className="flex items-center border-b border-n-1 p-4 text-sm last:border-none dark:border-white"
    href="/crm/product-details"
  >
    <div className="w-[4.25rem] shrink-0 border border-n-1">
      <Image className="w-full" src={item.image} width={74} height={74} alt="" />
    </div>
    <div className="w-[calc(100%-4.25rem)] pl-5">
      <div className="truncate font-bold">{item.title}</div>
      <div className="mb-2 truncate text-n-3 dark:text-white/75">{item.details}</div>
      <div className="flex items-center justify-between">
        <div className="inline-flex shrink-0 items-center">
          {item.stock}
          <div
            className="relative ml-3 h-1.5 w-14"
            style={{
              backgroundColor: item.progressColor || '#98E9AB',
            }}
          >
            <div
              className="absolute bottom-0 left-0 top-0 bg-n-1/30"
              style={{
                width: item.progressValue + '%',
              }}
            ></div>
          </div>
        </div>
        <div className="font-bold">${item.price}</div>
      </div>
    </div>
  </Link>
)

export default Item
