import { useState } from 'react'
import Icon from '@/components/Icon'
import Search from '@/components/Search'

const filtersChoice = ['All Customers', 'A-Z']

type FiltersProps = {}

const Filters = ({}: FiltersProps) => {
  const [search, setSearch] = useState<string>('')

  return (
    <div className="mb-6 flex md:flex-wrap">
      <button className="btn-purple btn-small">
        <Icon name="filters" />
        <span>All Filters</span>
      </button>
      <div className="flex flex-wrap md:order-3 md:-ml-3 md:mt-3">
        {filtersChoice.map((item, index) => (
          <div className="ml-3 flex items-center text-xs font-bold" key={index}>
            <button className="group -mt-0.5 mr-1">
              <Icon className="transition-colors group-hover:fill-pink-1 dark:fill-white" name="close" />
            </button>
            {item}
          </div>
        ))}
      </div>
      <Search
        className="ml-auto md:w-[64%]"
        placeholder="Search"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        onSubmit={() => console.log('Submit')}
      />
    </div>
  )
}

export default Filters
