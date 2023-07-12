import { useState } from 'react'
import Layout from '@/components/Layout'
import Tabs from '@/components/Tabs'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import TransactionDetails from '@/components/TransactionDetails'

import { transactions2 } from '@/mocks/finance'

const TransactionsListV1Page = () => {
  const [type, setType] = useState<string>('all-accounts')
  const [visible, setVisible] = useState<boolean>(false)

  const types = [
    {
      title: 'All Accounts',
      value: 'all-accounts',
    },
    {
      title: 'USD Account',
      value: 'usd-account',
    },
    {
      title: 'EUR Account',
      value: 'eur-account',
    },
    {
      title: 'GBP Account',
      value: 'gbp-account',
    },
  ]

  return (
    <>
      <Layout title="Transactions">
        <div className="mb-6 flex md:mb-5 md:block">
          <Tabs
            className="mr-auto md:-mx-5 md:flex-nowrap md:overflow-auto md:scroll-smooth md:scrollbar-none md:before:w-5 md:before:shrink-0 md:after:w-5 md:after:shrink-0"
            classButton="md:ml-0"
            items={types}
            value={type}
            setValue={setType}
          />
          <button className="btn-stroke btn-small mr-1.5 lg:hidden">
            <Icon name="filters" />
            <span>Apply Filter</span>
          </button>
          <button className="btn-stroke btn-small lg:hidden">
            <Icon name="document" />
            <span>Export to CSV</span>
          </button>
        </div>
        <div className="card">
          {transactions2.map((transaction: any) => (
            <div
              className="flex items-center border-b border-n-1 px-5 py-3.5 last:border-none dark:border-white md:px-4"
              key={transaction.id}
            >
              <div className="group flex grow cursor-pointer items-center" onClick={() => setVisible(true)}>
                <div className="h-9 w-9 shrink-0">
                  <Image className="w-full" src={transaction.logo} width={36} height={36} alt="Logo" />
                </div>
                <div className="grow px-3.5">
                  <div className="text-sm font-bold transition-colors group-hover:text-purple-1">
                    {transaction.title}
                  </div>
                  <div className="text-xs font-medium text-n-3 dark:text-white/75">{transaction.details}</div>
                </div>
              </div>
              <div className="whitespace-nowrap text-right">
                <div className="text-sm font-bold">{transaction.price}</div>
                <div className="text-xs font-medium text-n-3 dark:text-white/75">{transaction.date}</div>
              </div>
              <button className="btn-transparent-dark btn-small btn-square -mr-1.5 ml-3.5 shrink-0 md:hidden">
                <Icon name="dots" />
              </button>
            </div>
          ))}
        </div>
      </Layout>
      <TransactionDetails visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default TransactionsListV1Page
