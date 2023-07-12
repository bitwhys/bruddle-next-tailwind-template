import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Actions from './Actions'

const list = [
  {
    title: 'New tasks',
    value: 296,
    counter: -8,
  },
  {
    title: 'Followers',
    value: 18,
    counter: 5,
  },
  {
    title: 'Hourly rate',
    value: '$36',
  },
]

type ProfileProps = {
  actions?: boolean
}

const Profile = ({ actions }: ProfileProps) => (
  <div className="">
    <div className="mb-8 lg:text-center md:mb-6">
      <div className="relative mb-2.5 h-21 w-21 self-center lg:mx-auto">
        <Image className="rounded-full object-cover" src="/images/avatar.jpg" fill alt="Avatar" />
      </div>
      <div className="text-h4">Laquita Elliott</div>
      <div className="mb-4 text-sm">elliott.laquita@gmail.com</div>
      <div className="mb-3 text-xs">Happiness is not something readymade. It comes from your own actions.</div>
      <div className="label-stroke min-w-[5.125rem]">Designer</div>
    </div>
    <div>
      {list.map((item: any, index: number) => (
        <div
          className="mb-4 border-b border-dashed border-n-1 pb-4 last:mb-0 last:border-none last:pb-0 dark:border-white"
          key={index}
        >
          <div className="mb-0.5 flex items-center">
            <div className="font-bold">{item.value}</div>
            {item.counter && (
              <div
                className={`ml-1.5 min-w-[1.5rem] px-1 py-0.25 text-center text-xs font-bold text-n-1 ${
                  item.counter > 0 ? 'bg-green-1' : 'bg-pink-1'
                }`}
              >
                {item.counter}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">{item.title}</div>
            {item.counter && (
              <Icon className="dark:fill-white" name={item.counter > 0 ? 'arrow-up-right' : 'arrow-down-left'} />
            )}
          </div>
        </div>
      ))}
    </div>
    {actions && <Actions />}
  </div>
)

export default Profile
