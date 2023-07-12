import Link from 'next/link'
import Icon from '@/components/Icon'

type PostProps = {
  item: any
}

const Post = ({ item }: PostProps) => (
  <Link
    className="card mx-2.5 mt-2.5 flex w-[calc(33.333%-1.25rem)] flex-col items-start p-5 transition-colors hover:border-purple-1 hover:text-purple-1 lg:mx-0 lg:w-full"
    href="/support/article"
  >
    <div className="label-stroke mb-3.5 min-w-[7.25rem] text-center text-n-1">{item.category}</div>
    <div className="mb-1 text-h6">{item.title}</div>
    <div className="mb-3 text-sm text-n-3 dark:text-white/75">{item.content}</div>
    <div className="mt-auto flex items-center text-xs font-bold text-n-1 dark:text-white">
      <Icon className="mr-1.5 dark:fill-white" name="arrow-next" />
      Read more
    </div>
  </Link>
)

export default Post
