import { Switch as SwitchReact } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

type SwitchProps = {
  className?: string
  value: boolean
  setValue: any
}

const Switch = ({ className, value, setValue }: SwitchProps) => (
  <div className={`inline-flex shrink-0 ${className}`}>
    <SwitchReact
      checked={value}
      onChange={setValue}
      className={`relative inline-flex h-6 w-10 cursor-pointer items-center rounded-sm border border-n-1 pl-0.75 outline-none transition-colors dark:border-white ${
        value ? 'bg-purple-1' : 'bg-purple-3'
      }`}
    >
      <span
        aria-hidden="true"
        className={twMerge(
          `pointer-events-none inline-block h-4 w-4 transition-all ${
            value ? 'translate-x-4 bg-n-1' : 'translate-x-0 bg-purple-1'
          }`,
        )}
      />
    </SwitchReact>
  </div>
)

export default Switch
