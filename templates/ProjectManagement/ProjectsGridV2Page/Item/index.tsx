import Link from 'next/link'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Users from '@/components/Users'

type ItemProps = {
  item: any
}

const Item = ({ item }: ItemProps) => {
  return (
    <div className="card relative mx-2.5 mt-5 w-[calc(33.333%-1.25rem)] px-5 pb-8 pt-22 text-center lg:w-[calc(50%-1.25rem)] md:mt-2.5 md:w-[calc(100%-1.25rem)] md:py-8">
      <Users className="absolute left-5 top-5 md:hidden" items={item.users} border />
      <button className="btn-transparent-dark btn-small btn-square absolute right-3 top-4 md:hidden">
        <Icon name="dots" />
      </button>
      <div className="relative mx-auto mb-4 h-[4.25rem] w-[4.25rem] rounded-full bg-background p-5">
        <Image className="w-full" src={item.logo} width={30} height={30} alt="Logo" />
      </div>
      <Link
        className="mb-12 block text-h6 transition-colors hover:text-purple-1 md:mb-6"
        href="/projects/projects-details"
      >
        {item.title}
      </Link>
      <div className="label-stroke mb-4.5 min-w-[8.75rem]">
        <Icon className="mr-1 dark:fill-white" name="calendar" />
        {item.date}
      </div>
      <div className="flex items-center justify-center text-xs font-bold">
        <Icon className="dark:fill-white" name="tasks" />
        <span className="mx-1">Tasks</span>
        {item.tasksDone}/{item.tasksAll}
      </div>
    </div>
  )
}

export default Item
