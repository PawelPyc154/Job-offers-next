import { NextPage } from 'next'
import { signIn } from 'next-auth/react'

const SignUpRoute: NextPage = () => (
  <button type="button" onClick={() => signIn('github', { test: 'admin' }, { test: 'user' })}>
    Sign in
  </button>
)

export default SignUpRoute
