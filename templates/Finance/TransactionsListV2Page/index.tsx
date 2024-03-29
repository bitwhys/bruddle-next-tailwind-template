import { useState } from 'react'
import Layout from '@/components/Layout'
import Sorting from '@/components/Sorting'
import Icon from '@/components/Icon'
import Tabs from '@/components/Tabs'
import TablePagination from '@/components/TablePagination'
import Row from './Row'

import { transactions3 } from '@/mocks/finance'

const TransactionsListV2Page = () => {
  const [type, setType] = useState<string>('all-accounts')

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
      <table className="table-custom">
        <thead>
          <tr>
            <th className="th-custom md:hidden">
              <Sorting title="Date & Time" />
            </th>
            <th className="th-custom">
              <Sorting title="Payment" />
            </th>
            <th className="th-custom lg:hidden">
              <Sorting title="Service" />
            </th>
            <th className="th-custom lg:hidden">
              <Sorting title="Fee" />
            </th>
            <th className="th-custom text-right">
              <Sorting title="Price" />
            </th>
            <th className="th-custom w-15 !px-0 text-center md:hidden"></th>
          </tr>
        </thead>
        <tbody>
          {transactions3.map(transaction => (
            <Row item={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
      <TablePagination />
    </Layout>
  )
}

export default TransactionsListV2Page
