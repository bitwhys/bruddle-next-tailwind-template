import Link from 'next/link'
import Image from '@/components/Image'

type CourseProps = {
  item: any
}

const Course = ({ item }: CourseProps) => (
  <Link
    className="group mx-2.5 mt-5 flex w-[calc(33.333%-1.25rem)] flex-col border border-n-1 bg-white dark:border-white dark:bg-n-1 lg:w-[calc(50%-1.25rem)] md:w-[calc(100%-1.25rem)]"
    href="/education/course-details"
  >
    <div className="relative h-40 overflow-hidden 4xl:h-30">
      <Image
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        src={item.image}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
        alt=""
      />
    </div>
    <div className="flex grow flex-col px-5 pb-5">
      <div className="relative z-1 -mt-6.5 mb-4 flex h-13 w-13 items-center justify-center rounded border border-n-1 bg-white text-0">
        <Image src={item.logo} width={18} height={18} alt="" />
      </div>
      <div className="mb-1 text-h6">{item.title}</div>
      <div className="mb-3.5 text-sm text-n-3 dark:text-white/75">{item.school}</div>
      <div className="mt-auto flex items-center">
        <div className="label-stroke">{item.category}</div>
        <div className="ml-4 text-xs font-bold">{item.duration}</div>
      </div>
    </div>
  </Link>
)

export default Course
