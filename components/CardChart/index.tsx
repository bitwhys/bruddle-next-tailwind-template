import Icon from '@/components/Icon'

type CardChartProps = {
  className?: string
  title: string
  legend?: any
  children: React.ReactNode
}

const CardChart = ({ className, title, legend, children }: CardChartProps) => (
  <div className={`card ${className}`}>
    <div className="card-head justify-stretch">
      <div className="mr-auto text-h6">{title}</div>
      {legend && (
        <div className="mr-6 flex items-center md:flex-col md:items-stretch">
          {legend.map((item: any, index: number) => (
            <div className="mr-6 flex items-center text-xs font-bold last:mr-0 md:mr-0" key={index}>
              <div className="mr-1.5 h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
              {item.title}
            </div>
          ))}
        </div>
      )}
      <button className="group text-0">
        <Icon
          className="icon-18 fill-n-1 transition-colors group-hover:fill-purple-1 dark:fill-white"
          name="calendar"
        />
      </button>
    </div>
    {children}
  </div>
)

export default CardChart
