import Image from '@/components/Image'
import Icon from '@/components/Icon'

type AttachmentsProps = {
  images: any
}

const Attachments = ({ images }: AttachmentsProps) => (
  <div className="mt-5 border-t border-dashed border-n-1 pt-4 dark:border-white">
    <div className="mb-3 font-bold">Attachments</div>
    <div className="-ml-3 -mt-3 flex flex-wrap md:-mx-1 md:-mt-2">
      {images.map((image: any, index: number) => (
        <div
          className="relative ml-3 mt-3 aspect-square h-24 w-24 border border-n-1 dark:border-white md:mx-1 md:mt-2 md:w-[calc(50%-0.5rem)]"
          key={index}
        >
          <Image className="object-cover" src={image} fill alt="" />
        </div>
      ))}
      <div className="relative ml-3 mt-3 flex h-24 w-24 flex-col items-center justify-center border border-n-1 text-xs font-bold dark:border-white md:mx-1 md:h-8 md:w-full md:flex-row">
        <input className="absolute inset-0 opacity-0" type="file" />
        <Icon className="icon-18 mb-2 dark:fill-white md:mb-0 md:mr-3" name="upload" />
        Upload
      </div>
    </div>
  </div>
)

export default Attachments
