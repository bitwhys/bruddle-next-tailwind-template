import { useState } from 'react'
import Field from '@/components/Field'
import Checkbox from '@/components/Checkbox'
import Icon from '@/components/Icon'

type SignInProps = {
  onRecover: () => void
  onLoginQr: () => void
}

const SignIn = ({ onRecover, onLoginQr }: SignInProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [remember, setRemember] = useState<boolean>(false)

  return (
    <>
      <form action="" onSubmit={() => console.log('Submit')}>
        <div className="mb-1 text-h1">Sign in</div>
        <div className="mb-12 text-sm text-n-2 dark:text-white/50">Enter your account details or use QR code</div>
        <Field
          className="mb-4.5"
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />
        <Field
          className="mb-6.5"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          required
        />
        <div className="mb-6.5 flex items-center justify-between">
          <Checkbox label="Remember me" value={remember} onChange={() => setRemember(!remember)} />
          <button className="mt-0.5 text-xs font-bold transition-colors hover:text-purple-1" onClick={onRecover}>
            Recover password
          </button>
        </div>
        <button className="btn-purple btn-shadow h-14 w-full" type="submit">
          Sing in
        </button>
        <div className="flex items-center justify-center py-6">
          <span className="h-0.25 w-full max-w-[8.25rem] bg-n-1 dark:bg-white"></span>
          <span className="mx-4 text-sm font-medium">or</span>
          <span className="h-0.25 w-full max-w-[8.25rem] bg-n-1 dark:bg-white"></span>
        </div>
        <button className="btn-stroke h-14 w-full" type="button" onClick={onLoginQr}>
          <Icon name="qr-code" />
          <span>Log in with QR code</span>
        </button>
      </form>
    </>
  )
}

export default SignIn
