import Layout from '@/components/Layout'
import Tasks from '@/components/Tasks'
import Statistics from './Statistics'
import Events from './Events'

import { tasks } from '@/mocks/dashboard'

const ProjectsPage = () => {
  return (
    <Layout title="Dashboard">
      <Statistics />
      <div className="-mx-2.5 mt-6 flex lg:mx-0 lg:block">
        <div className="mx-2.5 w-[calc(66.666%-1.25rem)] lg:mx-0 lg:mb-6 lg:w-full">
          <Tasks items={tasks.slice(0, 6)} />
        </div>
        <div className="mx-2.5 w-[calc(33.333%-1.25rem)] lg:mx-0 lg:w-full">
          <Events />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
