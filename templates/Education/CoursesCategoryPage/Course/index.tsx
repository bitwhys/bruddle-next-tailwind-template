import Link from 'next/link'
import Image from '@/components/Image'

type CourseProps = {
  item: any
}

const Course = ({ item }: CourseProps) => (
  <Link
    className="group mb-5 flex border-b border-n-1 pb-5 last:mb-0 last:border-none last:pb-0 dark:border-white"
    href="/education/course-details"
  >
    <div className="relative h-21 w-21 shrink-0 overflow-hidden border border-n-1 md:hidden">
      <Image
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        src={item.image}
        fill
        alt=""
      />
    </div>
    <div className="w-[calc(100%-5.25rem)] pl-6 md:w-full md:pl-0">
      <div className="-mt-0.5 mb-1 truncate text-h6 transition-colors group-hover:text-purple-1 md:whitespace-normal">
        {item.title}
      </div>
      <div className="mb-3 text-sm text-n-3 dark:text-white/75">{item.school}</div>
      <div className="mt-auto flex items-center">
        <div className="label-stroke">{item.category}</div>
        <div className="ml-4 text-xs font-bold">{item.duration}</div>
        <div className="ml-auto flex items-center text-xs">
          <div className="-mt-0.5 mr-1.5 w-4">
            <Image className="w-full" src="/images/star.svg" width={16} height={16} alt="" />
          </div>
          <div className="mr-1.5 font-bold">{item.ratingValue}</div>
          <div className="md:hidden">
            ({item.ratingCounter}) {item.students} students
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default Course
