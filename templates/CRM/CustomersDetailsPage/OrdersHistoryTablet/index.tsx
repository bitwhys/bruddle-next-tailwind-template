import Icon from '@/components/Icon'
import Image from '@/components/Image'

type OrdersHistoryTabletProps = {
  items: any
}

const OrdersHistoryTablet = ({ items }: OrdersHistoryTabletProps) => {
  return (
    <div className="card">
      <div className="card-title">Orders history</div>
      <div>
        {items.map((item: any) => (
          <div
            className="flex items-center border-b border-n-1 px-5 py-3 last:border-none dark:border-white"
            key={item.id}
          >
            <div className="w-15 border border-n-1">
              <Image className="w-full" src={item.image} width={60} height={42} alt="" />
            </div>
            <div className="grow pl-3">
              <div className="mb-1 flex items-center justify-between text-sm font-bold">
                <div>{item.title}</div>
                <div>${item.price}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs">{item.date}</div>
                <div
                  className={`min-w-[5.25rem] md:!h-4.5 md:min-w-[4.125rem] ${
                    item.status === 'Pending' ? 'label-yellow' : 'label-green'
                  }`}
                >
                  {item.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrdersHistoryTablet
