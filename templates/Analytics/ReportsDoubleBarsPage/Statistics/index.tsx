import Icon from '@/components/Icon'

type StatisticsProps = {
  items: any
}

const Statistics = ({ items }: StatisticsProps) => (
  <div className="flex border-b border-n-1 dark:border-white md:block">
    {items.map((item: any) => (
      <div
        className="flex-1 border-r border-n-1 px-5 py-4 last:border-none dark:border-white md:border-b md:border-r-0"
        key={item.id}
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm text-n-3 dark:text-white/75">{item.category}</div>
          <Icon
            className={item.percent > 0 ? 'fill-green-1' : 'fill-pink-1'}
            name={item.percent > 0 ? 'arrow-up-right' : 'arrow-down-left'}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-1 text-h5">${item.price}</div>
          <div className="text-sm font-bold text-n-3 dark:text-white/75">
            {item.percent > 0 ? '+' + item.percent : item.percent}%
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Statistics
