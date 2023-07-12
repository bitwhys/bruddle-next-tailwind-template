import Layout from '@/components/Layout'
import Icon from '@/components/Icon'
import Image from '@/components/Image'
import Profile from './Profile'
import Tasks from './Tasks'

const TasksV3Page = () => {
  return (
    <Layout background title="All Tasks" back>
      <div className="mb-6 flex items-end lg:block">
        <div className="w-[calc(100%-20rem)] pr-[6.55rem] 4xl:w-[calc(100%-14.75rem)] 2xl:pr-20 xl:pr-12 lg:mb-4 lg:w-full lg:pr-0">
          <div className="shadow-primary-4 relative mb-3 h-[6.875rem] w-[6.875rem] overflow-hidden rounded-full">
            <Image className="object-cover" src="/images/avatar-2.jpg" fill alt="Avatar" />
          </div>
          <div className="flex items-center">
            <div className="text-h3">Francisco Maia</div>
            <div className="label-stroke ml-2">Designer</div>
          </div>
          <div className="text-sm">franco.maia@gmail.com</div>
        </div>
        <div className="flex w-[20rem] shrink-0 4xl:w-[14.75rem]">
          <button className="btn-purple btn-medium grow">
            <Icon name="add-circle" />
            <span>Add new task</span>
          </button>
          <button className="btn-purple btn-square btn-medium ml-1.5 shrink-0">
            <Icon name="email" />
          </button>
          <button className="btn-purple btn-square btn-medium ml-1.5 shrink-0">
            <Icon name="arrow-up-right" />
          </button>
        </div>
      </div>
      <div className="flex lg:flex-col-reverse">
        <div className="w-[calc(100%-20rem)] pr-[6.55rem] 4xl:w-[calc(100%-14.75rem)] 2xl:pr-20 xl:pr-12 lg:w-full lg:pr-0">
          <Tasks />
        </div>
        <div className="w-[20rem] shrink-0 4xl:w-[14.75rem] lg:mb-10 lg:w-full md:mb-8">
          <Profile />
        </div>
      </div>
    </Layout>
  )
}

export default TasksV3Page
