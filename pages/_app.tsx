import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Navigation } from 'components/navigation/navigation'
import { AppProviders } from 'components/context/appProviders'
import { useQueryParamsAll } from 'hooks/useQueryParamsAll'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useQueryParamsAll()
  return (
    <SessionProvider session={session}>
      <AppProviders>
        <div className="antialiased xl:h-screen grid xl:grid-cols-[max-content,1fr]">
          <Navigation />
          <div className="child:p-2 child:sm:p-3 child:xl:p-4 child:xl:h-screen">
            <Component {...pageProps} />
          </div>
        </div>
      </AppProviders>
    </SessionProvider>
  )
}

export default MyApp
