import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Icon from '@/components/Icon'
import Image from '@/components/Image'

type FieldProps = {
  className?: string
  classInput?: string
  label?: string
  textarea?: boolean
  type?: string
  value: string
  onChange: any
  placeholder?: string
  required?: boolean
  icon?: string
  image?: string
  currency?: string
}

const Field = ({
  className,
  classInput,
  label,
  textarea,
  type,
  value,
  onChange,
  placeholder,
  required,
  icon,
  image,
  currency,
}: FieldProps) => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

  const success = false
  const error = false

  return (
    <div className={`${className}`}>
      <div className="">
        {label && <div className="mb-3 text-xs font-bold">{label}</div>}
        <div className="relative">
          {textarea ? (
            <textarea
              className={twMerge(
                `h-24 w-full resize-none rounded-sm border border-n-1 bg-white px-5 py-3 text-sm font-bold text-n-1 outline-none transition-colors placeholder:text-n-3 focus:border-purple-1 dark:border-white dark:bg-n-1 dark:text-white dark:placeholder:text-white/75 dark:focus:border-purple-1 ${
                  icon ? 'pr-15' : ''
                } ${success ? '!border-green-1 pr-15' : ''} ${error ? '!border-pink-1 pr-15' : ''} ${
                  image || currency ? 'pr-15' : ''
                } ${classInput}`,
              )}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
            ></textarea>
          ) : (
            <input
              className={twMerge(
                `h-16 w-full rounded-sm border border-n-1 bg-white px-5 text-sm font-bold text-n-1 outline-none transition-colors placeholder:text-n-3 focus:border-purple-1 dark:border-white dark:bg-n-1 dark:text-white dark:placeholder:text-white/75 dark:focus:border-purple-1 ${
                  icon || type === 'password' ? 'pr-15' : ''
                } ${success ? '!border-green-1 pr-15' : ''} ${error ? '!border-pink-1 pr-15' : ''} ${
                  image || currency ? 'pr-15' : ''
                } ${classInput}`,
              )}
              type={(type === 'password' && (visiblePassword ? 'text' : 'password')) || type || 'text'}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
            />
          )}
          {icon && type !== 'password' && !success && !error && (
            <Icon
              className="icon-20 pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 fill-n-1 dark:fill-white"
              name={icon}
            />
          )}
          {type === 'password' && !success && !error && (
            <button
              className="group absolute bottom-0 right-0 top-0 w-15 outline-none"
              type="button"
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              <Icon
                className="icon-20 fill-n-2 transition-colors group-hover:fill-n-1 dark:fill-white/75 dark:group-hover:fill-white"
                name={visiblePassword ? 'eye' : 'eye-slash'}
              />
            </button>
          )}
          {(success || error) && (
            <Icon
              className={`icon-20 pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 ${
                success ? 'fill-green-1' : 'fill-pink-1'
              }`}
              name={success ? 'check-circle' : 'info-circle'}
            />
          )}
          {image && (
            <div className="absolute right-5 top-1/2 w-5 -translate-y-1/2 p-0.25 text-0 dark:bg-white">
              <Image className="w-full" src={image} width={20} height={20} alt="" />
            </div>
          )}
          {currency && <div className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-medium">{currency}</div>}
        </div>
      </div>
    </div>
  )
}

export default Field
