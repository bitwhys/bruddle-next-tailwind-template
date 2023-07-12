import Icon from '@/components/Icon'
import Task from '../Task'

type MonthProps = {}

import { month } from '@/mocks/calendar'

const Month = ({}: MonthProps) => (
  <div className="card">
    <div className="-mr-0.25 flex border-r border-n-1 dark:border-white/40">
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Mon</div>
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Tue</div>
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Wed</div>
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Thu</div>
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Fri</div>
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Sat</div>
      <div className="w-[calc(100%/7)] px-3 pb-3 pt-5 text-right text-xs font-bold md:text-center">Sun</div>
    </div>
    <div className="-mr-0.25 flex flex-wrap">
      {month.map((item: any, index: number) => (
        <div
          className="h-[8.125rem] w-[calc(100%/7)] border-r border-t border-n-1 px-3 pb-4 pt-2 dark:border-white/40 lg:h-[7.6rem] md:h-[7.6rem] md:px-0 md:text-center"
          key={index}
        >
          <div
            className={`mb-1 text-right text-sm font-medium text-n-3 dark:text-white/50 md:text-center ${
              item.month === 'September' && '!text-n-1 dark:!text-white'
            }`}
          >
            {item.day}
          </div>
          {item.tasks &&
            item.tasks
              .slice(0, 2)
              .map((task: any) => (
                <Task
                  className="mb-1 lg:h-5 lg:bg-transparent lg:p-0 dark:lg:bg-transparent md:mb-1 md:h-6 md:w-full md:justify-center"
                  classTitle="md:hidden"
                  item={task}
                  key={task.id}
                />
              ))}
          {item.tasks?.length > 2 && (
            <button className="group mt-1 inline-flex items-center px-1 text-xs font-bold transition-colors hover:text-purple-1 lg:-ml-1 lg:px-0 md:ml-0 md:mt-0.5 md:text-0">
              <Icon
                className="mr-1 transition-colors group-hover:fill-purple-1 dark:fill-white md:mr-0"
                name="dots-vertical"
              />
              More<span className="ml-1 lg:hidden"> events</span>
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default Month
