import Link from 'next/link'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

type RowProps = {
  item: any
}

const Row = ({ item }: RowProps) => {
  return (
    <tr className="">
      <td className="td-custom py-3.5">
        <Link
          className="inline-flex items-center text-sm font-bold transition-colors hover:text-purple-1"
          href="/crm/product-details"
        >
          <div className="mr-5 w-18 shrink-0 border border-n-1">
            <Image className="w-full" src={item.image} width={74} height={74} alt="" />
          </div>
          {item.title}
        </Link>
      </td>
      <td className="td-custom py-3.5 text-n-3 dark:text-white/75 4xl:max-w-[17.5rem]">{item.details}</td>
      <td className="td-custom py-3.5 text-right font-medium">{item.sold}</td>
      <td className="td-custom py-3.5 font-medium">
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
      </td>
      <td className="td-custom py-3.5 text-right font-bold">${item.price}</td>
      <td className="td-custom py-3.5 text-right">
        <button className="btn-stroke btn-small btn-square">
          <Icon name="dots" />
        </button>
      </td>
    </tr>
  )
}

export default Row
