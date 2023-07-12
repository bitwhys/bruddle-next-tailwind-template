import Icon from '@/components/Icon'

type SearchProps = {
  className?: string
  placeholder: string
  value: string
  onChange: any
  onSubmit: any
  large?: boolean
}

const Search = ({ className, placeholder, value, onChange, onSubmit, large }: SearchProps) => {
  return (
    <form
      className={`relative ${className} ${large ? 'shadow-primary-4 w-full' : 'w-[14.1rem]'}`}
      action=""
      onSubmit={onSubmit}
    >
      <input
        className={`w-full border border-n-1 bg-transparent text-n-1 outline-none transition-colors placeholder:text-n-1 focus:border-purple-1 dark:border-white dark:text-white dark:placeholder:text-white/75 dark:focus:border-purple-1 ${
          large ? 'h-16 bg-white pl-6 pr-18 text-base font-medium dark:bg-n-1' : 'h-8 pl-8 pr-4 text-xs font-bold'
        }`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <button
        className={`absolute text-0 ${
          large
            ? 'right-5 top-1/2 h-8 w-8 -translate-y-1/2 border border-n-1 bg-purple-1 transition-colors hover:bg-purple-1/90'
            : 'bottom-0 left-0 top-0 w-8'
        }`}
      >
        <Icon className="dark:fill-white" name="search" />
      </button>
    </form>
  )
}

export default Search
