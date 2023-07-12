import Image from '@/components/Image'
import Icon from '@/components/Icon'

type ImagesProps = {
  items: any
}

const Images = ({ items }: ImagesProps) => (
  <div className="mb-4">
    <div className="mb-4 text-xs font-bold">Images</div>
    <div className="rounded-sm border border-dashed border-n-1 p-2.5 dark:border-white">
      <div className="-mx-1.5 -mt-3 flex flex-wrap">
        {items.map((image: any, index: number) => (
          <div
            className="relative mx-1.5 mt-3 aspect-square w-[calc(20%-0.75rem)] rounded-sm border border-n-1 md:w-[calc(50%-0.75rem)]"
            key={index}
          >
            <Image className="ounded-sm object-cover" src={image} fill alt="" />
            <button className="absolute right-2.5 top-2.5 h-8 w-8 rounded-sm border border-n-1 bg-purple-1 text-0 transition-colors hover:bg-purple-2">
              <Icon name="close" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Images
