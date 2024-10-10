import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ToastContainer } from 'react-toastify'

import { ErrorWrapper } from '@/layouts/error'
import { AppPropsWithLayout } from '@/types/next'

const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const App: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            retryOnMount: false,
            retry: (failureCount, error) => {
              // Check if the error is an AxiosError
              if (error instanceof AxiosError) {
                // Extract the status code from the error response
                const statusCode = error.response?.status

                // Check if the status is neither in Array
                if (![500, 503].includes(statusCode as number)) {
                  // Retry up to 3 times
                  return failureCount < 3
                }
              }

              // Do not retry if it's not an AxiosError
              return false
            },
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 10_000),
            throwOnError: true
          },
          mutations: {
            retry: false
          }
        }
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<ErrorWrapper />}>
        <ToastContainer />
        <main className={interFont.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default appWithTranslation(App)
