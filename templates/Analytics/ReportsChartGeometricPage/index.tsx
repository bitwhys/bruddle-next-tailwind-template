import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import CardChart from '@/components/CardChart'
import Statistics from './Statistics'
import Chart from './Chart'

import { reportsStatistics4, barsDoubleData } from '@/mocks/finance'

const legend = [
  {
    title: 'Purple Tag',
    color: '#AE7AFF',
  },
  {
    title: 'Green Tag',
    color: '#98E9AB',
  },
]

const ReportsChartGeometricPage = () => {
  return (
    <Layout title="Reports">
      <Statistics items={reportsStatistics4} />
      <CardChart className="mb-5" title="Wave 12 columns" legend={legend}>
        <Chart items={barsDoubleData} />
      </CardChart>
      <div className="-mx-2.5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <CardChart title="Wave 8 columns" legend={legend}>
            <Chart items={barsDoubleData.slice(4, 12)} />
          </CardChart>
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <CardChart title="Wave 4 columns">
            <Chart items={barsDoubleData.slice(0, 4)} />
          </CardChart>
        </div>
      </div>
    </Layout>
  )
}

export default ReportsChartGeometricPage
