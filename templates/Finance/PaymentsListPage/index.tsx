import { useState } from 'react'
import Layout from '@/components/Layout'
import Search from '@/components/Search'
import Icon from '@/components/Icon'
import LatestTransfers from './LatestTransfers'
import RecentTransfers from './RecentTransfers'

import { paymentVariants, transactions2, recentTransfers } from '@/mocks/finance'

const PaymentsListPage = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <Layout title="Payments">
      <div className="flex items-start lg:block">
        <div className="card grow px-5 pb-6 pt-4 lg:mb-6 md:pt-5">
          <div className="mb-4 flex items-center justify-between md:block">
            <div className="text-h6 md:mb-3">Make a payment</div>
            <Search
              className="ml-auto md:w-full"
              placeholder="Search"
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              onSubmit={() => console.log('Submit')}
            />
          </div>
          <div className="mb-6">
            {paymentVariants.map((group, index) => (
              <div className="mb-5 last:mb-0" key={index}>
                <div className="mb-5 text-xs font-bold">{group.title}</div>
                <div className="-mx-2 -mt-5 flex flex-wrap md:mx-0 md:-mt-2.5 md:block">
                  {group.items.map((item, index) => (
                    <div
                      className="mx-2.5 mt-5 flex w-[calc(50%-1.25rem)] items-center border border-dashed border-n-1 p-3 dark:border-white md:mx-0 md:mt-2.5 md:w-full"
                      key={index}
                    >
                      <div className="flex h-13 w-13 items-center justify-center border border-n-1 bg-purple-1">
                        <Icon className="icon-18" name={item.icon} />
                      </div>
                      <div className="grow pl-3.5">
                        <div className="mb-0.5 text-sm font-bold">{item.title}</div>
                        <div className="text-xs font-medium">{item.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <LatestTransfers items={transactions2} />
        </div>
        <div className="ml-5 w-96 shrink-0 4xl:w-80 2xl:w-72 lg:ml-0 lg:w-full">
          <RecentTransfers items={recentTransfers} />
        </div>
      </div>
    </Layout>
  )
}

export default PaymentsListPage
