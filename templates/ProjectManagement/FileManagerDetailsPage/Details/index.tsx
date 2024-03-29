import Image from '@/components/Image'

type DetailsProps = {}

const Details = ({}: DetailsProps) => (
  <div className="ml-[6.625rem] w-[20rem] shrink-0 4xl:w-[14.7rem] 2xl:ml-16 lg:ml-0 lg:w-full">
    <div className="mb-5 text-h5">File details</div>
    <div className="mb-3 text-xs">Uploaded by</div>
    <div className="flex items-center text-sm font-bold">
      <div className="relative mr-2.5 h-6 w-6">
        <Image className="rounded-full object-cover" src="/images/avatar-1.jpg" fill alt="Avatar" />
      </div>
      Jube Bowman
    </div>
    <div className="mt-5 border-t border-dashed border-n-1 pt-5 dark:border-white">
      <div className="mb-5">
        <div className="mb-1.5 text-xs">Date uploaded</div>
        <div className="text-sm font-bold">10/18/2020, 9:44 PM</div>
      </div>
      <div className="">
        <div className="mb-1.5 text-xs">Extension</div>
        <div className="text-sm font-bold">.sketch</div>
      </div>
    </div>
    <div className="mt-5 border-t border-dashed border-n-1 pt-5 dark:border-white">
      <div className="mb-5">
        <div className="mb-1.5 text-xs">Shared with</div>
        <div className="text-sm font-bold">Public access</div>
      </div>
      <div className="mb-5">
        <div className="mb-1.5 text-xs">Public link</div>
        <a
          className="text-sm font-bold text-purple-1 transition-colors hover:text-purple-2"
          href="https://ui8.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://whiteui.store/neubrutality
        </a>
      </div>
    </div>
  </div>
)

export default Details
