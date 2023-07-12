import Icon from '@/components/Icon'

type FilesProps = {
  items: any
}

const Files = ({ items }: FilesProps) => (
  <div className="mt-2">
    {items.map((item: any) => (
      <div
        className="flex items-center border-b border-n-1/40 py-4 text-sm font-bold last:border-none dark:border-white/40"
        key={item.id}
      >
        <div className="mr-3">
          <Icon className="icon-22 dark:fill-white" name={item.icon} />
        </div>
        {item.title}
        {item.progress && (
          <div className="ml-auto flex shrink-0 items-center md:hidden">
            <div className="relative mr-3 h-1.5 w-24 shrink-0 bg-green-1">
              <div className="absolute bottom-0 left-0 top-0 bg-n-1/30" style={{ width: item.progress + '%' }}></div>
            </div>
            <Icon name="delete-marker" />
          </div>
        )}
      </div>
    ))}
  </div>
)

export default Files
