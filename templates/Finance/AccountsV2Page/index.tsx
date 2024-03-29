import { useState } from 'react'
import Layout from '@/components/Layout'
import Tabs from '@/components/Tabs'
import Cards from './Cards'
import Transfers from './Transfers'
import Limits from './Limits'

import { cards, transfers, limits } from '@/mocks/finance'

const AccountsV2Page = () => {
  const [type, setType] = useState<string>('overview')

  const typeTasks = [
    {
      title: 'Overview',
      value: 'overview',
    },
    {
      title: 'Currency',
      value: 'currency',
    },
    {
      title: 'Statement',
      value: 'statement',
    },
  ]

  return (
    <Layout title="Accounts">
      <div className="flex lg:block">
        <div className="card grow lg:mb-5 lg:border-none lg:bg-transparent">
          <div className="flex h-16 items-center border-b border-n-1 px-5 lg:hidden">
            <div className="mr-auto text-h6">Your cards</div>
            <Tabs className="" items={typeTasks} value={type} setValue={setType} />
          </div>
          <div className="mb-8 flex items-end px-3 pt-6 2xl:block md:p-0">
            <Cards items={cards} />
            <div className="grow pb-8 2xl:px-2 2xl:pb-0 2xl:pt-4 lg:text-center">
              <div className="mb-1 text-h4">42.800 USD</div>
              <div className="mb-6 text-xs font-medium text-n-3 dark:text-white/50">Available amount</div>
              <div className="mb-1 font-bold">UK64CT00000010034567</div>
              <div className="mb-6 text-xs font-medium text-n-3 dark:text-white/50">Account number</div>
              <button className="btn-stroke btn-small">Get card details</button>
            </div>
          </div>
          <Transfers items={transfers} />
        </div>
        <div className="ml-5 w-96 shrink-0 4xl:w-80 lg:ml-0 lg:w-full">
          <Limits items={limits} />
        </div>
      </div>
    </Layout>
  )
}

export default AccountsV2Page
