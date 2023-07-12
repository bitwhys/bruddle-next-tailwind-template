import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import Users from '@/components/Users'
import Details from './Details'

const FileManagerDetailsPage = () => {
  return (
    <Layout title="File Manager / Recent Uploads / …" back>
      <div className="flex lg:block">
        <div className="card grow px-9 pb-15 pt-9 lg:mb-6 lg:border-none lg:bg-transparent lg:p-0 dark:lg:bg-transparent">
          <div className="mb-42 flex justify-between xl:mb-24 lg:mb-8 md:mb-8 md:space-x-4">
            <button className="btn-stroke btn-small md:flex-1">
              <Icon name="dots" />
              <span>Actions</span>
            </button>
            <button className="btn-stroke btn-small md:flex-1">
              <Icon name="add-member" />
              <span>Share</span>
            </button>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center bg-background lg:mb-3 md:h-15 md:w-15">
              <Image src="/images/sketch.svg" width={60} height={60} alt="" />
            </div>
            <div className="mb-1 text-h2 md:text-h3">SaaS UI kit.sketch</div>
            <div className="mb-26 lg:mb-10 md:mb-6">168.5 mb</div>
            <Users
              className="mb-16 justify-center lg:mb-6"
              items={['/images/avatars/avatar-5.jpg', '/images/avatars/avatar-8.jpg', '/images/avatars/avatar-12.jpg']}
              large
              border
            />
            <button className="inline-flex items-center justify-center text-xs font-bold">
              <Icon className="mr-1 dark:fill-white" name="marker" />
              Add label
            </button>
          </div>
        </div>
        <Details />
      </div>
    </Layout>
  )
}

export default FileManagerDetailsPage
