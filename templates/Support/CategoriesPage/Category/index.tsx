import Link from 'next/link'
import Image from '@/components/Image'
import Icon from '@/components/Icon'

type CategoryProps = {
  item: any
}

const Category = ({ item }: CategoryProps) => (
  <div className="card mx-2.5 mt-2.5 block w-[calc(33.333%-1.25rem)] px-5 py-6 lg:mx-0 lg:w-full">
    <div className="mb-5 flex h-12 w-12 items-center justify-center border border-n-1 dark:border-white dark:bg-white">
      <Image className="w-4.5" src={item.icon} width={18} height={18} alt="" />
    </div>
    <div className="mb-3 text-h6">{item.title}</div>
    <div className="mb-4 flex flex-col items-start">
      {item.links.map((link: any, index: number) => (
        <Link
          className="mb-2.5 text-sm font-bold text-purple-1 transition-colors last:mb-0 hover:text-purple-2"
          href="/support/article"
          key={index}
        >
          {link}
        </Link>
      ))}
    </div>
    <Link
      className="group flex items-center text-xs font-bold text-n-1 transition-colors hover:!text-purple-1 dark:text-white"
      href="/support/categories"
    >
      <Icon className="mr-1.5 transition-colors group-hover:fill-purple-1 dark:fill-white" name="arrow-next" />
      See more articles
    </Link>
  </div>
)

export default Category
