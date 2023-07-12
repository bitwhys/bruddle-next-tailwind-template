type ChartCirclesProps = {
  items: any
}

const ChartCircles = ({ items }: ChartCirclesProps) => {
  return (
    <div className="px-5 pb-8 pt-6 lg:pt-8 md:pb-5 md:pt-5">
      <div className="relative mx-auto mb-7 flex h-[18rem] w-[18rem] flex-col items-center justify-center">
        {items.map((item: any, index: number) => (
          <div
            className="absolute rounded-full"
            key={index}
            style={{
              top: index * 16,
              left: index * 16,
              right: index * 16,
              bottom: index * 16,
              borderWidth: 4,
              borderStyle: 'solid',
              borderColor: item.color,
            }}
          ></div>
        ))}
        <div className="text-h3">$80,720.50</div>
        <div className="text-sm font-medium">from all accounts</div>
      </div>
      <div className="-mx-5 -mt-1.5 flex flex-wrap justify-center pb-0.25 2xl:-mx-2 md:-mt-4">
        {items.map((item: any, index: number) => (
          <div className="mx-5 mt-3 flex items-center text-xs font-bold 2xl:mx-2" key={index}>
            <div className="mr-1.5 h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChartCircles
