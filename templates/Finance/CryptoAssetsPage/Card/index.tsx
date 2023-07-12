import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import Icon from '@/components/Icon'
import Image from '@/components/Image'

type CardProps = {
  item: any
}

const Card = ({ item }: CardProps) => (
  <div className="card mx-2.5 w-[calc(33.333%-1.25rem)] px-5 py-4 lg:mx-0 lg:mb-3 lg:w-full lg:last:mb-0">
    <div className="flex items-center justify-between">
      <div className="text-h6">{item.title}</div>
      <div className={`flex items-center text-sm font-bold ${item.progress > 0 ? 'text-green-1' : 'text-pink-1'}`}>
        {item.progress > 0 ? '+' + item.progress : item.progress}%
        <Icon
          className={`ml-0.5 ${item.progress > 0 ? 'fill-green-1' : 'fill-pink-1'}`}
          name={item.progress > 0 ? 'arrow-up-right' : 'arrow-down-right'}
        />
      </div>
    </div>
    <div className="my-1 ml-auto h-16 max-w-[10.75rem]">
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
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center">
        <div className="mr-1.5 w-4.5 rounded-full text-0 dark:bg-white">
          <Image
            className="w-full dark:scale-105"
            src={item.currencyLogo}
            width={18}
            height={18}
            alt={item.currencyTitle}
          />
        </div>
        <div className="mr-1 font-bold">{item.currencyTitle}</div>
        <div className="font-medium text-n-3 dark:text-white/75">{item.currencyInfo}</div>
      </div>
      <div className="font-bold">${item.price}</div>
    </div>
  </div>
)

export default Card
