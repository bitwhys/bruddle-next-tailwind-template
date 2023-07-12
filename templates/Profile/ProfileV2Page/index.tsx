import Layout from '@/components/Layout'
import Profile from '@/components/Profile'
import Reviews from './Reviews'

const ProfileV2Page = () => {
  return (
    <Layout title="All Contacts" back>
      <div className="flex lg:flex-col-reverse">
        <div className="w-[calc(100%-20rem)] pr-[6.625rem] 4xl:w-[calc(100%-14.7rem)] 2xl:pr-20 xl:pr-12 lg:w-full lg:pr-0">
          <Reviews />
        </div>
        <div className="w-[20rem] shrink-0 4xl:w-[14.7rem] lg:mb-8 lg:w-full">
          <Profile actions />
        </div>
      </div>
    </Layout>
  )
}

export default ProfileV2Page
