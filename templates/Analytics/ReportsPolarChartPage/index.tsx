import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import CardChart from '@/components/CardChart'
import Card from './Card'
import ChartPolar from './ChartPolar'
import Chart from './Chart'

import { reportsStatistics5, polarChartData, barsData } from '@/mocks/finance'

const ReportsChartWavePage = () => {
  return (
    <Layout title="Reports">
      <div className="-mx-2.5 mb-5 flex lg:mx-0 lg:block">
        {reportsStatistics5.map(card => (
          <Card item={card} key={card.id} />
        ))}
      </div>
      <div className="-mx-2.5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(50%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <CardChart title="Polar chart 6 columns">
            <ChartPolar items={polarChartData} />
          </CardChart>
        </div>
        <div className="mx-2.5 w-[calc(50%-1.25rem)] lg:mx-0 lg:w-full">
          <CardChart title="Polar chart 6 columns">
            <Chart items={barsData.slice(3, 9)} />
          </CardChart>
        </div>
      </div>
    </Layout>
  )
}

export default ReportsChartWavePage
