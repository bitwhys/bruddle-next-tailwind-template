import Image from '@/components/Image'

import { accounts } from '@/mocks/finance'

type AssetsProps = {}

const Assets = ({}: AssetsProps) => (
  <div className="card">
    <div className="px-4 py-5 pb-2 lg:flex lg:justify-between md:block">
      <div className="mb-3.5 lg:mb-0 md:mb-3">
        <div className="text-h4">$441 339,29 Usd</div>
        <div className="text-sm font-medium text-n-3 dark:text-white/50">From all accounts in total</div>
      </div>
      <button className="btn-stroke btn-small px-5">Manage assets</button>
    </div>
    <div>
      {accounts.map(item => (
        <div
          className="flex items-center border-b border-n-1 px-4 pb-5 pt-4.5 text-sm last:border-none dark:border-white"
          key={item.id}
        >
          <div className="flex grow items-center text-sm">
            <div className="mr-3 w-6 rounded-full text-0 dark:bg-white md:mr-2">
              <Image className="w-full" src={item.currencyLogo} width={24} height={24} alt={item.currencyTitle} />
            </div>
            <div className="mr-1 font-bold">{item.currencyTitle}</div>
            <div
              className={`ml-1.5 flex items-center text-sm font-bold md:ml-1 ${
                item.progress > 0 ? 'text-green-1' : 'text-pink-1'
              }`}
            >
              {item.progress > 0 ? '+' + item.progress : item.progress}%
            </div>
          </div>
          <div className="w-32 text-right md:mr-2 md:w-auto">${item.price}</div>
          <div className="w-32 text-right font-bold md:w-auto">{item.crypto}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Assets
