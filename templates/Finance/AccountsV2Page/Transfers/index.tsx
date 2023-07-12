import Image from '@/components/Image'
import Icon from '@/components/Icon'

type TransfersProps = {
  items: any
}

const Transfers = ({ items }: TransfersProps) => (
  <div className="lg:card">
    <div className="mb-3 px-5 text-h6 lg:card-title lg:mb-0">Latest transfers</div>
    <div className="">
      {items.map((item: any) => (
        <div
          className="flex items-center border-b border-n-1 px-5 py-4 last:border-none dark:border-white md:px-4"
          key={item.id}
        >
          <div className="h-9 w-9 shrink-0">
            <Image className="w-full" src={item.logo} width={36} height={36} alt="Logo" />
          </div>
          <div className="mr-auto px-3.5">
            <div className="text-sm font-bold">{item.title}</div>
            <div className="text-xs font-medium text-n-3 dark:text-white/75">{item.details}</div>
          </div>
          <div className="whitespace-nowrap text-right">
            <div className="text-sm font-bold">{item.price}</div>
            <div className="text-xs font-medium text-n-3 dark:text-white/75">{item.date}</div>
          </div>
          <button className="btn-transparent-dark btn-small btn-square ml-3.5 shrink-0 md:hidden">
            <Icon name="dots" />
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default Transfers
