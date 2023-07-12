import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Images from './Images'
import Blockquote from './Blockquote'
import Actions from './Actions'
import Task from './Task'
import Files from './Files'

type ReviewProps = {
  item: any
  imageBig?: boolean
}

const Review = ({ item, imageBig }: ReviewProps) => {
  return (
    <div className="card mb-4 flex p-5 pb-3 last:mb-0">
      <div className="relative h-8.5 w-8.5 shrink-0">
        <Image className="rounded-full object-cover" src={item.avatar} fill alt="Avatar" />
      </div>
      <div className="w-[calc(100%-2.125rem)] pl-3.5">
        <div className="flex">
          <div className="whitespace-nowrap text-sm font-bold">{item.author}</div>
          <div className="ml-2 truncate pt-0.75 text-xs font-medium text-n-3 dark:text-white/75">{item.time}</div>
          <button className="btn-transparent-dark btn-small btn-square -mr-2 -mt-1.5 ml-auto">
            <Icon name="dots" />
          </button>
        </div>
        <div className="text-sm">{item.content}</div>
        {item.images && <Images items={item.images} imageBig={imageBig} />}
        {item.blockquote && <Blockquote item={item.blockquote} />}
        {item.tasks && (
          <div className="mt-2">
            {item.tasks.map((task: any) => (
              <Task item={task} key={task.id} />
            ))}
          </div>
        )}
        {item.files && <Files items={item.files} />}
        <Actions comments={item.comments} likes={item.likes} />
      </div>
    </div>
  )
}

export default Review
