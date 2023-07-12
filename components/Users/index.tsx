import Image from '@/components/Image'

type UsersProps = {
  className?: string
  items: Array<string>
  large?: boolean
  border?: boolean
}

const Users = ({ className, items, large, border }: UsersProps) => (
  <div className={`flex ${className}`}>
    {items.map((image, index) => (
      <div
        className={`relative -ml-2 h-6 w-6 rounded-full first:ml-0 ${
          border ? 'border-2 border-white dark:border-n-1' : ''
        } ${large ? '-ml-3 h-8 w-8 md:-ml-4' : ''}`}
        style={{ zIndex: items.length - index }}
        key={index}
      >
        <Image className="rounded-full object-cover" src={image} fill alt="Avatar" />
      </div>
    ))}
  </div>
)

export default Users
