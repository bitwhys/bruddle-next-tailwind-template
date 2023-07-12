import { useState } from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Layout from '@/components/Layout'
import Select from '@/components/Select'
import Card from './Card'
import Assets from './Assets'
import LatestTransactions from './LatestTransactions'

import { watchlist } from '@/mocks/finance'

const currencies = [
  {
    id: '0',
    title: 'USD',
  },
  {
    id: '1',
    title: 'EUR',
  },
  {
    id: '2',
    title: 'GBP',
  },
]

const CryptoAssetsPortfolio = () => {
  const [currency, setCurrency] = useState<any>(currencies[0])

  return (
    <Layout title="Crypto Portfolio">
      <div className="mb-6 flex">
        <div>
          <div className="mb-0.5 text-h5">
            Your portfolio is up <span className="text-green-1">9.68%</span>
          </div>
          <div className="text-sm font-medium text-n-3 dark:text-white/50">In the past 24 hours</div>
        </div>
        <div className="ml-auto flex h-8 items-center border border-n-1 px-3 text-xs font-bold dark:border-white">
          Currency:
          <Select
            className="ml-1"
            classButton="h-auto px-0 border-none bg-trasparent"
            classOptions="-left-4 -right-3 w-auto"
            classArrow="ml-1"
            items={currencies}
            value={currency}
            onChange={setCurrency}
            small
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="card-title border border-n-1 bg-white dark:border-white dark:bg-n-1">Watchlist</div>
        <Splide
          className="-mt-0.25 border-l border-n-1 dark:border-white"
          hasTrack={false}
          options={{
            perPage: 3,
            arrows: false,
            breakpoints: {
              1023: {
                perPage: 2,
              },
              767: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideTrack>
            {watchlist.map(card => (
              <SplideSlide key={card.id}>
                <Card item={card} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <ul className="splide__pagination splide__pagination-crypto"></ul>
        </Splide>
      </div>
      <div className="-mx-2.5 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(50%-1.25rem)] lg:mx-0 lg:mb-5 lg:w-full">
          <Assets />
        </div>
        <div className="mx-2.5 w-[calc(50%-1.25rem)] lg:mx-0 lg:w-full">
          <LatestTransactions />
        </div>
      </div>
    </Layout>
  )
}

export default CryptoAssetsPortfolio
