import { useState } from 'react'
import Layout from '@/components/Layout'
import Search from '@/components/Search'
import TablePagination from '@/components/TablePagination'
import Course from './Course'

import { variantsCourse, courses3 } from '@/mocks/education'

const CoursesV2Page = () => {
  const [search, setSearch] = useState<string>('')
  const [activeId, setActiveId] = useState<string>('1')

  return (
    <Layout title="Courses" background>
      <div className="mx-auto mb-[6.57rem] max-w-[41.25rem] pt-12 2xl:mb-16 md:mb-10 md:pt-6">
        <div className="mb-8 text-center text-h1 md:mb-5 md:text-h2">Software Development</div>
        <Search
          className="mb-8"
          placeholder="Mobile and Web Design"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          onSubmit={() => console.log('Submit')}
          large
        />
        <div className="mb-5 text-center text-sm font-bold">Suggested course searches</div>
        <div className="-ml-0.75 -mt-1.5 flex flex-wrap justify-center">
          {variantsCourse.map(variant => (
            <button
              className={`label-black ml-0.75 mt-1.5 dark:border-transparent ${
                activeId === variant.id ? 'border-purple-1 bg-purple-1 dark:bg-purple-1' : ''
              }`}
              key={variant.id}
              onClick={() => setActiveId(variant.id)}
            >
              {variant.title}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <div className="mb-5 text-sm font-bold">Earn Your Degree</div>
        <div className="-mx-2.5 -mt-5 flex flex-wrap">
          {courses3.map(course => (
            <Course item={course} key={course.id} />
          ))}
        </div>
      </div>
      <TablePagination />
    </Layout>
  )
}

export default CoursesV2Page
