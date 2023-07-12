import Image from '@/components/Image'
import Icon from '@/components/Icon'

type RowProps = {
  item: any
}

const Row = ({ item }: RowProps) => (
  <tr className="text-sm">
    <td className="px-3 py-2.5 pl-0 align-middle">
      <div className="flex items-center font-bold">
        <div className="mr-3 h-8 w-8 rounded-full bg-background p-2">
          <Image className="w-full" src={item.logo} width={16} height={16} alt="" />
        </div>
        {item.title}
      </div>
    </td>
    <td className="px-3 py-2.5 align-middle md:pr-0 md:text-right">
      <div className="label-stroke">{item.status}</div>
    </td>
    <td className="px-3 py-2.5 text-right align-middle font-medium md:hidden">{item.date}</td>
    <td className="py-2.5 pl-3 pr-5 text-right align-middle font-medium md:hidden">{item.email}</td>
    <td className="w-8 px-0 py-2.5 align-middle md:hidden">
      <button className="btn-transparent-dark btn-small btn-square">
        <Icon name="dots" />
      </button>
    </td>
  </tr>
)

export default Row
