import Link from 'next/link'
import Image from '@/components/Image'
import Users from '@/components/Users'
import Icon from '@/components/Icon'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => (
  <Link className="block border-b border-n-1 p-4 last:border-none dark:border-white" href="/projects/projects-details">
    <div className="mb-4 flex items-center justify-between border-b border-dashed border-n-1 pb-4 dark:border-white">
      <div className="flex grow items-center text-sm font-bold">
        <div className="relative mr-2.5 h-8 w-8 rounded-full bg-background p-2">
          <Image className="w-full" src={item.logo} width={16} height={16} alt="Logo" />
        </div>
        <div>
          <div className="mb-1 font-bold">{item.title}</div>
          <div
            className="relative h-1 w-18"
            style={{
              backgroundColor: item.tasksColor || '#98E9AB',
            }}
          >
            <div
              className="absolute bottom-0 left-0 top-0 bg-n-1/30"
              style={{
                width: (item.tasksDone / item.tasksAll) * 100 + '%',
              }}
            ></div>
          </div>
        </div>
      </div>
      <Users className="ml-2 shrink-0" items={item.users} large border />
    </div>
    <div className="flex items-center justify-between text-xs font-bold">
      <div className="flex items-center">
        <Icon className="mr-1 dark:fill-white" name="tasks" />
        <div>
          {item.tasksDone}/{item.tasksAll}
        </div>
      </div>
      <div>{item.date}</div>
    </div>
  </Link>
)

export default Item
