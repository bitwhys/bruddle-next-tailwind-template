import Link from 'next/link'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <Link
    className="block border-b border-n-1 px-5 py-4 text-sm last:border-none dark:border-white"
    href="/crm/product-details"
  >
    <div className="mb-4 flex items-center justify-between border-b border-dashed border-n-1 pb-4 dark:border-white">
      <div className="label-black min-w-[5.25rem]">{item.status}</div>
      <div className="">{item.date}</div>
    </div>
    <div className="mb-1 flex items-center justify-between font-bold">
      <div>{item.name}</div>
      <div>${item.amount}</div>
    </div>
    <div className="flex items-center justify-between text-xs">
      <div>{item.source}</div>
      <div>${item.rate}</div>
    </div>
  </Link>
)

export default Item
