import Layout from '@/components/Layout'
import Profile from './Profile'
import Tasks from './Tasks'

const TasksV2Page = () => {
  return (
    <Layout title="All Tasks" background back>
      <div className="flex pt-4 lg:block lg:pt-0">
        <div className="w-[20rem] shrink-0 4xl:w-[16.3rem] lg:mb-8 lg:w-full">
          <Profile />
        </div>
        <div className="w-[calc(100%-20rem)] pl-[5.125rem] 4xl:w-[calc(100%-16.3rem)] 2xl:pl-16 lg:w-full lg:pl-0">
          <Tasks />
        </div>
      </div>
    </Layout>
  )
}

export default TasksV2Page
