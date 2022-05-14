import React, { ReactNode } from 'react'
import { UserProvider } from './userProvider'

interface AppProvidersProps {
  children: ReactNode
}
const AppProviders = ({ children }: AppProvidersProps) => <UserProvider>{children}</UserProvider>

export { AppProviders }
