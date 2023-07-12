import Image from '@/components/Image'

type AnswerProps = {
  time: string
  content: string
}

const Answer = ({ time, content }: AnswerProps) => (
  <div className="flex justify-end">
    <div className="flex grow flex-col items-end">
      <div className="mb-1.5 flex justify-end text-xs">
        <div className="">{time}</div>
        <div className="ml-1 font-bold">Gabriela Pires</div>
      </div>
      <div
        className="inline-block bg-purple-1 px-4 py-1.5 text-sm font-medium text-n-1"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 0.7rem) 0, 100% 0.7rem, 100% 100%, 0 100%)',
        }}
      >
        {content}
      </div>
    </div>
    <div className="relative ml-2 h-8 w-8">
      <Image className="rounded-full object-cover" src="/images/avatars/avatar.jpg" fill alt="Avatar" />
    </div>
  </div>
)

export default Answer
