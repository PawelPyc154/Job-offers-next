import { NextPage } from 'next'
import { signIn } from 'next-auth/react'

const SignInRoute: NextPage = () => (
  <div>
    <button type="button" onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000' })}>
      Sign in
    </button>
  </div>
)

export default SignInRoute
