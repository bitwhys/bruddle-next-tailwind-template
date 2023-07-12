import Image from '@/components/Image'

import { experience } from '@/mocks/profile'

type ExperienceProps = {}

const Experience = ({}: ExperienceProps) => (
  <div>
    {experience.map(item => (
      <div
        className="mb-4 flex items-start border-b border-dashed border-n-1 pb-4 last:mb-0 last:border-none last:pb-0 dark:border-white"
        key={item.id}
      >
        <div className="mr-5 mt-1 w-8 shrink-0 p-0.5 dark:bg-white">
          <Image className="w-full" src={item.image} width={32} height={32} alt="" />
        </div>
        <div className="grow">
          <div className="text-sm font-bold">{item.title}</div>
          <div className="flex items-center justify-between md:mb-1 md:block">
            <div className="mb-1 text-sm">
              {item.city}
              <span className="relative -top-0.75 mx-2 inline-block h-1 w-1 bg-n-1 dark:bg-white"></span>
              {item.company}
            </div>
            <div className="ml-4 shrink-0 text-xs font-bold md:ml-0">{item.duration}</div>
          </div>
          <div className="text-xs font-medium text-n-3 dark:text-white/50">{item.content}</div>
        </div>
      </div>
    ))}
  </div>
)

export default Experience
