import { detailsAccount } from '@/mocks/profile'

type AccountProps = {}

const Account = ({}: AccountProps) => (
  <div className="card">
    <div className="card-title">Public account details</div>
    <div className="p-5">
      <div className="-mx-2.5 -mt-4 flex flex-wrap">
        {detailsAccount.map(item => (
          <div
            className={`mx-2.5 mt-4 border-b border-n-1 pb-3 dark:border-white ${
              item.fullWide ? 'w-[calc(100%-1.25rem)]' : 'w-[calc(50%-1.25rem)] md:w-[calc(100%-1.25rem)]'
            }`}
            key={item.id}
          >
            <div className="mb-1.5 text-xs text-n-3 dark:text-white/75">{item.label}</div>
            <div className="text-sm font-bold">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-between md:mt-8 md:block">
        <button className="btn-stroke min-w-[11.7rem] md:mb-3 md:w-full">Reset Changes</button>
        <button className="btn-purple min-w-[11.7rem] md:w-full">Update Settings</button>
      </div>
    </div>
  </div>
)

export default Account
