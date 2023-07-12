import Image from '@/components/Image'
import Loading from './Loading'

type QuestionProps = {
  time?: string
  content?: string
  images?: Array<string>
  loading?: boolean
}

const Question = ({ time, content, images, loading }: QuestionProps) => (
  <div className="flex">
    <div className="relative mr-2 h-8 w-8">
      <Image className="rounded-full object-cover" src="/images/avatars/avatar-2.jpg" fill alt="Avatar" />
    </div>
    <div className="flex grow flex-col items-start">
      <div className="mb-1.5 flex justify-end text-xs">
        <div className="mr-1 font-bold">Sallie Wade</div>
        <div className="">{time}</div>
      </div>
      <div
        className="inline-block bg-background px-4 py-1.5 text-sm font-medium dark:bg-white/25"
        style={{
          clipPath: 'polygon(0.7rem 0, 100% 0, 100% 100%, 0 100%, 0 0.7rem)',
        }}
      >
        {loading ? <Loading /> : content}
      </div>
      {images && (
        <div className="-ml-2 mt-1 flex flex-wrap">
          {images.map((image: any, index: number) => (
            <div className="relative ml-2 mt-2 h-[5.25rem] w-28 border border-n-1" key={index}>
              <Image className="ounded-sm object-cover" src={image} fill alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)

export default Question
