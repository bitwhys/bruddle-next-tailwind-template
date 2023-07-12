import Icon from '@/components/Icon'

type StatisticsProps = {
  items: any
}

const Statistics = ({ items }: StatisticsProps) => (
  <div className="-mx-2.5 mb-5 flex md:mx-0 md:-mt-2.5 md:block">
    {items.map((item: any) => (
      <div className="card mx-2.5 w-[calc(33.333%-1.25rem)] px-5 py-4.5 md:mx-0 md:mt-2.5 md:w-full" key={item.id}>
        <div className="mb-1 flex items-center justify-between">
          <div className="text-sm">{item.title}</div>
          <Icon className="icon-18 dark:fill-white" name={item.icon} />
        </div>
        <div className="mb-3.5 text-h5">${item.price}</div>
        <div className="relative h-1 w-full" style={{ backgroundColor: item.colorProgress }}>
          <div className="absolute bottom-0 left-0 top-0 bg-n-1/30" style={{ width: item.progress + '%' }}></div>
        </div>
      </div>
    ))}
  </div>
)

export default Statistics
