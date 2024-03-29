import Link from 'next/link'
import Image from '@/components/Image'

type ArticleProps = {
  className?: string
  classIcon?: string
  item: any
}

const Article = ({ className, classIcon, item }: ArticleProps) => (
  <Link
    className={`card flex items-center p-5 transition-colors hover:border-purple-1 hover:text-purple-1 md:p-4 ${className}`}
    href="/support/article"
  >
    <div
      className={`mr-3 flex h-12 w-12 shrink-0 items-center justify-center border border-n-1 dark:border-white dark:bg-white ${classIcon}`}
    >
      <Image className="w-4.5" src={item.icon} width={18} height={18} alt="" />
    </div>
    <div className="grow">
      <div className="text-h6">{item.title}</div>
      {item.content && <div className="text-sm text-n-3 dark:text-white/75">{item.content}</div>}
      {item.date && (
        <div className="mt-1 flex items-center text-sm text-n-1 dark:text-white">
          {item.date}
          {item.category && (
            <>
              <div className="mx-2 h-1 w-1 rounded-full bg-n-1 dark:bg-white"></div>
              {item.category}
            </>
          )}
        </div>
      )}
    </div>
  </Link>
)

export default Article
