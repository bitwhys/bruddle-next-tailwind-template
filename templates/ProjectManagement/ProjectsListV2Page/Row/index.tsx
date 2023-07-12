import Link from 'next/link'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Users from '@/components/Users'

type RowProps = {
  item: any
}

const Row = ({ item }: RowProps) => {
  return (
    <div className="flex items-center border-b border-n-1 p-4 last:border-none dark:border-white">
      <Link
        className="flex grow items-center text-sm font-bold transition-colors hover:text-purple-1"
        href="/projects/projects-details"
      >
        <div className="relative mr-3 h-8 w-8 rounded-full bg-background p-2">
          <Image className="w-full" src={item.logo} width={16} height={16} alt="Logo" />
        </div>
        {item.title}
        <div
          className={`ml-2.5 md:hidden ${
            item.category === 'UI Design'
              ? 'label-stroke-yellow'
              : item.category === 'Marketing'
              ? 'label-stroke-green'
              : item.category === 'Advertising'
              ? 'label-stroke-pink'
              : 'label-stroke-purple'
          }`}
        >
          {item.category}
        </div>
      </Link>
      <div className="mr-5 flex min-w-[5rem] shrink-0 items-center text-xs font-bold md:ml-2 md:mr-0 md:min-w-min">
        <Icon className="mr-1 dark:fill-white" name="tasks" />
        <span className="md:hidden">Tasks</span> {item.tasksDone}/{item.tasksAll}
      </div>
      <div className="label-stroke mr-4.5 min-w-[9rem] shrink-0 lg:hidden">
        <Icon className="mr-1 dark:fill-white" name="calendar" />
        {item.date}
      </div>
      <Users className="mr-3 shrink-0 lg:hidden" items={item.users} large border />
      <button className="btn-transparent-dark btn-small btn-square shrink-0 md:hidden">
        <Icon name="dots" />
      </button>
    </div>
  )
}

export default Row
