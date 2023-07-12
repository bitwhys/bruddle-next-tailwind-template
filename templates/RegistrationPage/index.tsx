import { useState } from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import Head from 'next/head'
import Logo from '@/components/Logo'
import Image from '@/components/Image'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import LoginQr from './LoginQr'

const RegistrationPage = () => {
  const [signUp, setSignUp] = useState<boolean>(false)
  const [forgotPassword, setForgotPassword] = useState<boolean>(false)
  const [loginQr, setLoginQr] = useState<boolean>(false)
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  const handleClick = () => {
    setSignUp(!signUp)
    setForgotPassword(false)
    setLoginQr(false)
  }

  return (
    <>
      <Head>
        <title>Bruddle</title>
      </Head>
      <div className="relative overflow-hidden">
        <div className="relative z-3 mx-auto flex min-h-screen max-w-[75rem] flex-col px-7.5 py-12 xls:px-20 lg:px-8 md:px-6 md:py-8">
          <div className="flex max-w-[27.31rem] grow flex-col lg:max-w-[25rem]">
            <Logo className="w-[6.25rem]" />
            <div className="my-auto py-12">
              {forgotPassword ? (
                <ForgotPassword />
              ) : loginQr ? (
                <LoginQr />
              ) : signUp ? (
                <SignUp />
              ) : (
                <SignIn onRecover={() => setForgotPassword(true)} onLoginQr={() => setLoginQr(true)} />
              )}
            </div>
            <div className="text-sm">
              {signUp || forgotPassword ? 'Already registered?' : 'You don’t have an account'}
              <button className="ml-1.5 font-bold transition-colors hover:text-purple-1" onClick={handleClick}>
                {signUp || forgotPassword ? 'Sign in to your account' : 'Create an account'}
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
          <div className="absolute inset-0 z-1 bg-n-2 opacity-0 dark:opacity-80"></div>
          <div className="absolute left-[45vw] top-[50%] w-[85rem] -translate-y-1/2 xl:w-[60rem] lg:left-[50vw] md:-left-[30%] md:-top-[25%] md:w-[30rem] md:translate-y-0">
            <Image className="" src="/images/bg.svg" width={1349} height={1216} alt="" />
          </div>
        </div>
        <div className="absolute right-[calc(50%-61.8125rem)] top-1/2 w-[61.8125rem] -translate-y-1/2 xls:right-[calc(50%-61rem)] xls:w-[55rem] lg:right-[calc(50%-64rem)] md:hidden">
          <Image
            className="w-full"
            src={isDarkMode ? '/images/mockup-dark.png' : '/images/mockup-light.png'}
            width={989}
            height={862}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default RegistrationPage
