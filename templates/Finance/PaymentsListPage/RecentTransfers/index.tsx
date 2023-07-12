import { useState } from 'react'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import RecipientDetails from '../RecipientDetails'

type RecentTransfersProps = {
  items: any
}

const RecentTransfers = ({ items }: RecentTransfersProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <div className="card px-5 pb-6 pt-5">
        <div className="mb-3 text-h6">Recent transfers</div>
        <div className="-mx-5 mb-1">
          {items.map((item: any) => (
            <button
              className="flex w-full items-center border-b border-n-1 px-5 py-3.5 pb-4 text-left transition-colors last:border-none hover:text-purple-1 dark:border-white"
              key={item.id}
              onClick={() => setVisible(true)}
            >
              <div className="h-8 w-8 shrink-0">
                <Image
                  className="w-full rounded-full object-cover"
                  src={item.avatar}
                  width={32}
                  height={32}
                  alt="Avatar"
                />
              </div>
              <div className="grow pl-3">
                <div className="text-sm font-bold">{item.title}</div>
                <div className="flex items-center justify-between text-xs font-medium text-n-3 dark:text-white/75">
                  <div>Account ending in {item.details}</div>
                  <div className="flex items-center uppercase">
                    <div className="mr-1 h-3.5 w-3.5">
                      <Image
                        className="w-full"
                        src={`/images/${item.currency}.svg`}
                        width={32}
                        height={32}
                        alt="Avatar"
                      />
                    </div>
                    {item.currency}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <button className="btn-stroke btn-small w-full">
          <Icon name="dots" />
          <span>See all transactions</span>
        </button>
      </div>
      <RecipientDetails visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default RecentTransfers
