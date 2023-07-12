import Layout from '@/components/Layout'
import Details from './Details'
import PriceStatistics from './PriceStatistics'
import TopStories from './TopStories'
import Operation from './Operation'

const CryptoAssetsDetailsPage = () => {
  return (
    <Layout title="Bitcoin (BTC)" back>
      <div className="-mx-2.5 mb-6 flex lg:mx-0 lg:mb-5 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <Details />
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <PriceStatistics />
        </div>
      </div>
      <div className="-mx-2.5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <TopStories />
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <Operation />
        </div>
      </div>
    </Layout>
  )
}

export default CryptoAssetsDetailsPage
