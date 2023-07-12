import Icon from '@/components/Icon'
import { twMerge } from 'tailwind-merge'

type PaginationProps = {}

const Pagination = ({}: PaginationProps) => {
  const active = true

  return (
    <div className="mt-6 flex items-center">
      <button
        className={twMerge(
          `mr-1 h-8 w-8 border border-transparent text-xs font-bold transition-colors hover:text-purple-1 ${
            active ? 'border-n-1 bg-purple-1 !text-n-1' : ''
          }`,
        )}
      >
        1
      </button>
      <button
        className={twMerge(
          `mr-1 h-8 w-8 border border-transparent text-xs font-bold transition-colors hover:text-purple-1`,
        )}
      >
        2
      </button>
      <button
        className={twMerge(
          `mr-1 h-8 w-8 border border-transparent text-xs font-bold transition-colors hover:text-purple-1`,
        )}
      >
        3
      </button>
      <button
        className={twMerge(
          `mr-1 h-8 w-8 border border-transparent text-xs font-bold transition-colors hover:text-purple-1`,
        )}
      >
        4
      </button>
      <button
        className={twMerge(
          `mr-1 h-8 w-8 border border-transparent text-xs font-bold transition-colors hover:text-purple-1`,
        )}
      >
        5
      </button>
      <button className="btn-stroke btn-small ml-12">
        <span>Next</span>
        <Icon name="arrow-next" />
      </button>
    </div>
  )
}

export default Pagination
