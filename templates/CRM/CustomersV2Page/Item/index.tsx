import Link from 'next/link'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <Link
    className="block border-b border-n-1 px-4 py-3 last:border-none dark:border-white"
    href="/crm/customers-details"
  >
    <div className="mb-1 flex items-center justify-between text-sm font-bold">
      <div>{item.name}</div>
      <div>${item.rate}</div>
    </div>
    <div className="flex items-center justify-between text-xs">
      <div>
        {item.date}
        <span className="relative -top-1 mx-1.5 inline-block h-0.5 w-0.5 rounded-full bg-n-1"></span> {item.product}
      </div>
      <div
        className={`label-green min-w-[5.25rem] md:!h-4.5 md:min-w-[4.125rem] ${
          item.status === 'Pending' ? 'label-yellow' : ''
        }`}
      >
        {item.status}
      </div>
    </div>
  </Link>
)

export default Item
