type StatisticsProps = {
  items: any
}

const Statistics = ({ items }: StatisticsProps) => (
  <div className="-mx-2.5 mb-5 flex lg:mx-0 lg:-mt-2.5 lg:block">
    {items.map((item: any) => (
      <div className="card mx-2.5 w-[calc(33.333%-1.25rem)] px-5 py-4 lg:mx-0 lg:mt-2.5 lg:w-full" key={item.id}>
        <div className="mb-0.5 text-sm text-n-3 dark:text-white/75">{item.title}</div>
        <div className="mb-3 text-h6">${item.price}</div>
        <div className="relative mb-6 h-1 w-full lg:mb-4" style={{ backgroundColor: item.progressColor }}>
          <div className="absolute bottom-0 left-0 top-0 bg-n-1/30" style={{ width: item.progressValue + '%' }}></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <div className="font-bold">{item.spent}</div>
            <div className="text-xs">Spent</div>
          </div>
          <div className="text-right">
            <div className="font-bold">{item.left}</div>
            <div className="text-xs">Left</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Statistics
