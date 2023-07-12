import Icon from '@/components/Icon'

import { socialProfiles } from '@/mocks/profile'

type SocialNetworksProps = {}

const SocialNetworks = ({}: SocialNetworksProps) => (
  <div className="card">
    <div className="card-title">Social profiles</div>
    <div className="p-5">
      <div>
        {socialProfiles.map(item => (
          <div className="mb-4 flex items-center border-b border-n-3 pb-4 pl-3 dark:border-white md:pl-0" key={item.id}>
            <Icon className="icon-20 mr-8 shrink-0 dark:fill-white md:mr-4" name={item.icon} />
            <div className="mr-auto">
              <div className="mb-1.5 text-xs font-medium text-n-3 dark:text-white/75">{item.label}</div>
              <div className="break-all text-sm font-bold">{item.link ? item.link : 'Not connected'}</div>
            </div>
            {!item.link && (
              <button className="group inline-flex items-center self-end pb-0.5 text-xs font-bold transition-colors hover:text-purple-1">
                <Icon
                  className="mr-1.5 transition-colors group-hover:fill-purple-1 dark:fill-white dark:group-hover:fill-purple-1"
                  name="external-link"
                />
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
      <button className="group mt-5 inline-flex items-center font-bold transition-colors hover:text-purple-1">
        <Icon
          className="icon-18 mr-1.5 transition-colors group-hover:fill-purple-1 dark:fill-white dark:group-hover:fill-purple-1"
          name="add-circle"
        />
        Add More
      </button>
      <div className="mt-16 flex justify-between md:mt-8 md:block">
        <button className="btn-stroke min-w-[11.7rem] md:mb-3 md:w-full">Reset Changes</button>
        <button className="btn-purple min-w-[11.7rem] md:w-full">Update Settings</button>
      </div>
    </div>
  </div>
)

export default SocialNetworks
