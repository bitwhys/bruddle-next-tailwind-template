import Layout from '@/components/Layout'
import Profile from './Profile'
import Details from './Details'

const JobsPage = () => {
  return (
    <Layout title="All Jobs" back>
      <div className="flex pt-4 lg:block">
        <div className="w-[18rem] shrink-0 4xl:w-[14.68rem] lg:mb-10 lg:w-full">
          <Profile />
        </div>
        <div className="w-[calc(100%-18rem)] pl-[5.125rem] 4xl:w-[calc(100%-14.68rem)] 2xl:pl-12 lg:w-full lg:pl-0">
          <Details />
        </div>
      </div>
    </Layout>
  )
}

export default JobsPage
