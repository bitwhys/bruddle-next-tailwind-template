import Layout from '@/components/Layout'
import SalesOverview from './SalesOverview'
import FinancialOverview from './FinancialOverview'
import Products from '@/components/Products'

import { products } from '@/mocks/dashboard'

const ECommercePage = () => {
  return (
    <Layout title="Dashboard">
      <div className="-mx-2.5 mb-5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <SalesOverview />
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <FinancialOverview />
        </div>
      </div>
      <div className="mb-3.5 hidden text-h6 lg:block">Latest Sales</div>
      <Products items={products} />
    </Layout>
  )
}

export default ECommercePage
