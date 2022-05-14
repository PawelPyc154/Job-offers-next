import { signIn } from 'next-auth/react'
import React from 'react'

const SignUpPage = () => (
  <button type="button" onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000' }, { register: 'yes', role: 'candidate' })}>
    Sign in
  </button>
)

export { SignUpPage }
