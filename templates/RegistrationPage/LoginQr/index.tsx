import Icon from '@/components/Icon'
import Image from '@/components/Image'

type LoginQrProps = {}

const LoginQr = ({}: LoginQrProps) => {
  return (
    <>
      <div className="mb-1 text-h1 md:text-h2">Log in with QR</div>
      <div className="mb-12 text-sm text-n-2 dark:text-white/50">
        Scan this code with the mobile app to log in instantly
      </div>
      <div className="relative mx-auto h-[12.75rem] w-[12.75rem] rounded-sm border border-n-1 p-2 dark:border-white">
        <Image className="h-full w-full" src="/images/qr-code.png" width={194} height={194} alt="QR Code" />
      </div>
      <div className="flex items-center justify-center py-6">
        <span className="h-0.25 w-full max-w-[8.25rem] bg-n-1 dark:bg-white"></span>
        <span className="mx-4 text-sm font-medium">or</span>
        <span className="h-0.25 w-full max-w-[8.25rem] bg-n-1 dark:bg-white"></span>
      </div>
      <button className="btn-stroke h-14 w-full">
        <Icon name="devices" />
        <span>Log in with email or phone number</span>
      </button>
    </>
  )
}

export default LoginQr
