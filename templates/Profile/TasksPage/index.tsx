import Layout from '@/components/Layout'
import Profile from '@/components/Profile'
import Statistics from './Statistics'
import Tasks from './Tasks'

const TasksPage = () => {
  return (
    <Layout title="All Tasks" back>
      <div className="flex lg:flex-col-reverse">
        <div className="w-[calc(100%-20rem)] pr-[6.625rem] 4xl:w-[calc(100%-14.7rem)] 2xl:pr-16 xl:pr-12 lg:w-full lg:pr-0">
          <Statistics />
          <Tasks />
        </div>
        <div className="w-[20rem] shrink-0 4xl:w-[14.7rem] lg:mb-8 lg:w-full">
          <Profile actions />
        </div>
      </div>
    </Layout>
  )
}

export default TasksPage
