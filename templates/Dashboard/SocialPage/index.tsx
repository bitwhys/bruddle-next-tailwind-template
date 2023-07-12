import Layout from '@/components/Layout'
import Statistics from './Statistics'
import LatestUpdates from './LatestUpdates'
import Contacts from './Contacts'

const SocialPage = () => {
  return (
    <Layout title="Dashboard">
      <Statistics />
      <div className="-mx-2.5 mt-4 flex lg:mx-0 lg:mt-6 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-6 lg:w-full">
          <LatestUpdates />
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <Contacts />
        </div>
      </div>
    </Layout>
  )
}

export default SocialPage
