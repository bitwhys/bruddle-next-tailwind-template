import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import Icon from '@/components/Icon'

type CardProps = {
  item: any
}

const Card = ({ item }: CardProps) => (
  <div className="card mx-2.5 w-[calc(33.333%-1.25rem)] px-5 py-4 2xl:px-4 lg:mx-0 lg:mb-3 lg:w-full lg:last:mb-0">
    <div className="flex items-center">
      <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded border border-n-1 dark:border-white dark:bg-white 2xl:mr-3 lg:mr-5">
        <Icon className="icon-18" name={item.icon} />
      </div>
      <div className="">
        <div className="text-h5">{item.size}</div>
        <div className="text-sm">{item.title}</div>
      </div>
      <div className="ml-auto h-[3.7rem] w-full max-w-[5.75rem] shrink-0 2xl:h-[3.2rem] lg:max-w-[12rem] md:max-w-[5.75rem]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={item.data}
            margin={{
              top: 2,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={item.id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="1%" stopColor={item.colorChart} stopOpacity={0.6} />
                <stop offset="50%" stopColor={item.colorChart} stopOpacity={0.2} />
                <stop offset="95%" stopColor={item.colorChart} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} />
            <Area
              type="monotone"
              dataKey="price"
              stroke={item.colorChart}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#${item.id})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
)

export default Card
