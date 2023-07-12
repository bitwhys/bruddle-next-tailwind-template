import Icon from '@/components/Icon'

type SpecificationsProps = {
  items: any
}

const Specifications = ({ items }: SpecificationsProps) => (
  <div className="mb-6">
    <div className="mb-4 text-xs font-bold">Specifications</div>
    <div className="rounded-sm border border-n-1 p-5 dark:border-white md:p-3">
      <div className="-mx-0.75 -mt-1.5 flex flex-wrap">
        {items.map((specification: any, index: number) => (
          <div className="label-stroke mx-0.75 mt-1.5 inline-flex items-center text-xs font-bold" key={index}>
            <button className="group mr-1">
              <Icon className="transition-colors group-hover:fill-pink-1 dark:fill-white" name="close" />
            </button>
            {specification}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Specifications
