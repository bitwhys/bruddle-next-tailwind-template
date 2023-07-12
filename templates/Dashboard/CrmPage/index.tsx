import Layout from '@/components/Layout'
import Statistics from './Statistics'
import SalesOverview from './SalesOverview'
import Customers from './Customers'

const CrmPage = () => {
  return (
    <Layout title="Dashboard">
      <div className="-mx-2.5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <Statistics />
          <SalesOverview />
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <Customers />
        </div>
      </div>
    </Layout>
  )
}

export default CrmPage
