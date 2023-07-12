import Icon from '@/components/Icon'

type StatisticsProps = {
  items: any
}

const Statistics = ({ items }: StatisticsProps) => (
  <div className="-mx-2.5 mb-5 flex lg:mx-0 lg:-mt-2.5 lg:block">
    {items.map((item: any) => (
      <div
        className="card mx-2.5 flex w-[calc(33.333%-1.25rem)] py-4 pl-5 pr-7 lg:mx-0 lg:mt-2.5 lg:w-full"
        key={item.id}
      >
        <div className="mr-auto">
          <div className="mb-1.5 text-sm">{item.title}</div>
          <div className="mb-1.5 text-h4">{item.value}</div>
          <div
            className={`flex items-center text-xs font-bold ${
              item.percent > 0 ? 'fill-green-1 text-green-1' : 'fill-pink-1 text-pink-1'
            }`}
          >
            <Icon className="mr-1 fill-inherit" name={item.percent > 0 ? 'arrow-up-right' : 'arrow-down-right'} />
            {item.percent > 0 ? '+' + item.percent : item.percent}
          </div>
        </div>
        <div className="flex space-x-3">
          {item.parameters.map((parameter: any, index: number) => (
            <div className="relative h-[4.82rem] w-1 rounded-1" style={{ backgroundColor: item.color }} key={index}>
              <div
                className="absolute bottom-0 left-0 right-0 rounded-1 bg-n-1/30"
                style={{ height: parameter + '%' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export default Statistics
