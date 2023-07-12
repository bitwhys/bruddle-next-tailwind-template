import Icon from '@/components/Icon'

import { financialOverview } from '@/mocks/dashboard'

type FinancialOverviewProps = {}

const FinancialOverview = ({}: FinancialOverviewProps) => (
  <div className="card">
    <div className="card-head">
      <div className="mr-auto text-h6">Financial Overview</div>
      <button className="text-0 transition-colors hover:fill-purple-1 dark:fill-white dark:hover:fill-purple-1">
        <Icon className="icon-18 fill-inherit" name="calendar" />
      </button>
    </div>
    <div className="px-5 pb-5 pt-4">
      <div>
        {financialOverview.map(item => (
          <div
            className="mb-5 border-b border-dashed border-n-1 pb-5 last:mb-0 last:border-none last:pb-0 dark:border-white"
            key={item.id}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm text-n-3 dark:text-white/75">{item.category}</div>
              <Icon className="dark:fill-white" name={item.percent > 0 ? 'arrow-up-right' : 'arrow-down-left'} />
            </div>
            <div className="mb-1 text-h5">${item.price}</div>
            <div className="flex items-center justify-between">
              <div className="text-xs">{item.content}</div>
              <div
                className={`min-w-[2.625rem] text-center text-xs font-bold text-n-1 ${
                  item.percent > 0 ? 'bg-green-1' : 'bg-pink-1'
                }`}
              >
                {item.percent > 0 ? '+' + item.percent : item.percent}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-stroke btn-small mt-5.5 w-full">
        <Icon name="chart" />
        <span>Financial Report</span>
      </button>
    </div>
  </div>
)

export default FinancialOverview
