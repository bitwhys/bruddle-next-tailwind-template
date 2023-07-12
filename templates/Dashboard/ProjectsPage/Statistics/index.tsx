import Users from '@/components/Users'

import { statisticsProjects } from '@/mocks/dashboard'

type StatisticsProps = {}

const Statistics = ({}: StatisticsProps) => (
  <div className="-mx-2.5 flex lg:mx-0 lg:block">
    {statisticsProjects.map(item => (
      <div className="card mx-2.5 w-[calc(33.333%-1.25rem)] p-5 lg:mx-0 lg:mb-4 lg:w-full lg:last:mb-0" key={item.id}>
        <div className="mb-5 text-h6 lg:mb-3">{item.title}</div>
        <div className="mb-1.5 flex justify-between text-sm">
          <div>Progress</div>
          <div className="font-bold">{item.progress}%</div>
        </div>
        <div className="relative mb-8 h-1 w-full lg:mb-5" style={{ backgroundColor: item.colorProgress }}>
          <div className="absolute bottom-0 left-0 top-0 bg-n-1/30" style={{ width: item.progress + '%' }}></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="label-stroke min-w-[6rem]">{item.date}</div>
          <Users items={item.users} />
        </div>
      </div>
    ))}
  </div>
)

export default Statistics
