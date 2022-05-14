// import { Heading } from 'components/common/heading'
import { signIn } from 'next-auth/react'
import React from 'react'

const SignInPage = () => (
  <div>
    <button type="button" onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000' })}>
      Sign in
    </button>
  </div>
)

export { SignInPage }
