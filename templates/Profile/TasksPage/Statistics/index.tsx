import { useState } from 'react'
import Icon from '@/components/Icon'
import Tabs from '@/components/Tabs'

import { statistics } from '@/mocks/profile'

type StatisticsProps = {}

const Statistics = ({}: StatisticsProps) => {
  const [duration, setDuration] = useState<string>('month')

  const durations = [
    {
      title: 'Month',
      value: 'month',
    },
    {
      title: 'Week',
      value: 'week',
    },
    {
      title: 'Day',
      value: 'day',
    },
  ]

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between md:block">
        <Tabs
          className="md:ml-0"
          classButton="md:ml-0 md:flex-1"
          items={durations}
          value={duration}
          setValue={setDuration}
        />
        <button className="btn-stroke btn-small min-w-[6rem] md:hidden">
          <Icon className="icon-18 mr-1.5 fill-inherit" name="report" />
          <span>Report</span>
        </button>
      </div>
      <div className="-mx-2.5 flex md:mx-0 md:block">
        {statistics.map(item => (
          <div
            className="card mx-2.5 flex w-[calc(50%-1.25rem)] items-center py-4 pl-5 pr-7 md:mx-0 md:mb-4 md:w-full md:last:mb-0"
            key={item.id}
          >
            <div className="mr-auto">
              <div className="mb-2.5 text-sm">{item.title}</div>
              <div className="mb-1 text-h4">{item.counter} Tasks</div>
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
              {item.parameters.map((parameter, index) => (
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
    </div>
  )
}

export default Statistics
