import Link from 'next/link'
import Image from '@/components/Image'

type CoursesProps = {
  items: any
}

const Courses = ({ items }: CoursesProps) => (
  <div className="clear-both -ml-[1.25rem] -mt-[1.25rem] md:ml-0">
    {items.map((item: any) => (
      <Link
        className="group relative float-left ml-[1.25rem] mt-[1.25rem] flex h-[10.625rem] w-[calc(33.333%-1.25rem)] flex-col overflow-hidden border border-n-1 p-4 text-white first:h-[22.5rem] dark:border-white 4xl:h-[8.625rem] 4xl:first:h-[18.5rem] md:ml-0 md:w-full md:first:h-[8.625rem]"
        key={item.id}
        href="/education/course-details"
      >
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={item.image}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
          alt=""
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[6.25rem] bg-gradient-to-b from-n-1/0 to-n-1/60"></div>
        <div className="label-black relative z-2 mb-auto ml-auto dark:bg-n-1">{item.counter} Courses</div>
        <div className="relative z-2 text-h5 lg:text-h6">{item.title}</div>
        <div className="relative z-2 text-xs font-medium">{item.duration}</div>
      </Link>
    ))}
  </div>
)

export default Courses
