import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import CardChart from '@/components/CardChart'
import Statistics from './Statistics'
import Chart from './Chart'

import { reportsStatistics2, barsHorizontalData } from '@/mocks/finance'

const ReportsBarsHorizontalPage = () => {
  return (
    <Layout title="Reports">
      <Statistics items={reportsStatistics2} />
      <CardChart className="mb-5" title="Bars 12 columns">
        <Chart items={barsHorizontalData} />
      </CardChart>
      <div className="-mx-2.5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <CardChart title="Bars 8 columns">
            <Chart items={barsHorizontalData} />
          </CardChart>
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <CardChart title="Bars 4 columns">
            <Chart items={barsHorizontalData} />
          </CardChart>
        </div>
      </div>
    </Layout>
  )
}

export default ReportsBarsHorizontalPage
