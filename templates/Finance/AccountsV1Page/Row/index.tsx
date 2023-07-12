import Image from '@/components/Image'
import Icon from '@/components/Icon'

type RowProps = {
  item: any
  labelTitle?: string
  labelAmount?: string
}

const Row = ({ item, labelTitle, labelAmount }: RowProps) => (
  <tr className="border-t border-n-1 first:border-none dark:border-white">
    <td className="w-18 py-4 text-center align-middle text-0 md:w-14">
      <div className="inline-flex w-5 p-0.25 dark:bg-white">
        <Image className="w-full" src={item.logo} width={20} height={20} alt="" />
      </div>
    </td>
    <td className="py-4 pr-6 align-middle">
      <div className="mb-0.5 text-sm font-bold">{item.title}</div>
      <div className="text-xs text-n-3 dark:text-white/75">{labelTitle}</div>
    </td>
    <td className="py-4 pr-6 align-middle md:pr-5 md:text-right">
      <div className="mb-0.5 text-sm font-bold">${item.balance}</div>
      <div className="text-xs text-n-3 dark:text-white/75">Balance</div>
    </td>
    <td className="py-4 pr-6 align-middle md:hidden">
      <div className="mb-0.5 text-sm font-bold">${item.amount}</div>
      <div className="text-xs text-n-3 dark:text-white/75">{labelAmount}</div>
    </td>
    <td className="py-4 pr-6 align-middle lg:hidden">
      <div className="mb-0.5 text-sm font-bold">{item.valid}</div>
      <div className="text-xs text-n-3 dark:text-white/75">Valid</div>
    </td>
    <td className="py-4 pr-6 align-middle md:hidden">
      <div className="flex items-center text-xs font-bold">
        <div className={`mr-1.5 h-2 w-2 rounded-full ${item.status === 'Active' ? 'bg-green-1' : 'bg-pink-1'}`}></div>
        {item.status}
      </div>
    </td>
    <td className="w-14 py-4 text-center align-middle md:hidden">
      <button className="btn-transparent-dark btn-small btn-square">
        <Icon name="dots" />
      </button>
    </td>
  </tr>
)

export default Row
