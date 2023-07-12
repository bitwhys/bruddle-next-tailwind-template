import Icon from '@/components/Icon'

import { detailsSecurity, securityCredentials } from '@/mocks/profile'

type SecurityProps = {}

const Security = ({}: SecurityProps) => (
  <div className="card">
    <div className="card-title">Login details</div>
    <div className="p-5">
      <div className="-mx-2.5 -mt-4 flex flex-wrap">
        {detailsSecurity.map(item => (
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
      <div className="mt-9">
        <div className="mb-8 text-h6">Security credentials</div>
        <div>
          {securityCredentials.map(item => (
            <div
              className="mb-4 flex items-center border-b border-n-3 pb-4 pl-3.5 dark:border-white md:pl-0"
              key={item.id}
            >
              <Icon className="icon-18 mr-8 shrink-0 dark:fill-white md:mr-4" name={item.icon} />
              <div className="mr-auto">
                <div className="mb-1.5 text-xs font-medium text-n-3 dark:text-white/75">{item.date}</div>
                <div className="text-sm font-bold">{item.title}</div>
              </div>
              {item.currentSession && <div className="label-black h-9 px-5 md:px-2">Current session</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-between md:mt-8 md:block">
        <button className="btn-stroke min-w-[11.7rem] md:mb-3 md:w-full">Reset Changes</button>
        <button className="btn-purple min-w-[11.7rem] md:w-full">Update Settings</button>
      </div>
    </div>
  </div>
)

export default Security
