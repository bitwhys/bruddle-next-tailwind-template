import Layout from '@/components/Layout'
import Actions from '@/components/Actions'
import TablePagination from '@/components/TablePagination'
import Item from './Item'

import { customers3 } from '@/mocks/crm'

const CustomersV3Page = () => {
  return (
    <Layout title="Customers">
      <Actions />
      <div className="-mx-2.5 -mt-5 flex flex-wrap md:-mt-3">
        {customers3.map(customer => (
          <Item item={customer} key={customer.id} />
        ))}
      </div>
      <TablePagination />
    </Layout>
  )
}

export default CustomersV3Page
