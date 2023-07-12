import Image from '@/components/Image'
import Icon from '@/components/Icon'

type LatestSalesProps = {
  items: any
}

const LatestSales = ({ items }: LatestSalesProps) => (
  <div className="">
    <div className="mb-4 flex items-center justify-between px-5">
      <div className="font-bold">Latest Sales</div>
      <button className="text-xs font-bold transition-colors hover:text-purple-1">See all sales breakdown</button>
    </div>
    <div className="table w-full">
      {items.map((item: any) => (
        <div className="group table-row" key={item.id}>
          <div className="table-cell border-b border-n-1 py-2 pl-5 pr-2 align-middle text-sm group-last:border-none group-last:pb-4 dark:border-white">
            <div className="inline-flex items-center text-sm font-bold">
              <div className="mr-3 w-15 border border-n-1">
                <Image className="w-full" src={item.image} width={60} height={42} alt="" />
              </div>
              {item.title}
            </div>
          </div>
          <div className="table-cell border-b border-n-1 px-2 py-2 align-middle text-sm font-medium group-last:border-none group-last:pb-4 dark:border-white md:hidden">
            {item.date}
          </div>
          <div className="table-cell border-b border-n-1 px-2 py-2 text-right align-middle text-sm font-bold group-last:border-none group-last:pb-4 dark:border-white">
            ${item.price}
          </div>
          <div className="table-cell border-b border-n-1 px-2 py-2 text-center align-middle text-sm group-last:border-none group-last:pb-4 dark:border-white md:hidden">
            <div
              className={`min-w-[5.25rem] ${
                item.status === 'Paid' ? 'label-green' : item.status === 'Pending' ? 'label-yellow' : 'label-purple'
              }`}
            >
              {item.status}
            </div>
          </div>
          <div className="table-cell w-8 border-b border-n-1 py-2 pl-2 pr-5 text-right align-middle text-sm group-last:border-none group-last:pb-4 dark:border-white md:pr-3">
            <button className="btn-transparent-dark btn-small btn-square">
              <Icon name="dots" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default LatestSales
