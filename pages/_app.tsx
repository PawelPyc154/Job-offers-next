import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Navigation } from 'components/navigation/navigation'
import { AppProviders } from 'components/context/appProviders'
import { useQueryParamsAll } from 'hooks/useQueryParamsAll'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  useQueryParamsAll()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <AppProviders>
          <div className="antialiased xl:h-screen grid xl:grid-cols-[max-content,1fr]">
            <Navigation />
            <div className="child:p-2 child:sm:p-3 child:xl:p-4 child:xl:h-screen">
              <Component {...pageProps} />
            </div>
          </div>
        </AppProviders>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp
