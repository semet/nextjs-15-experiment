import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'
import { Inter } from 'next/font/google'
import { useState } from 'react'

import { AppPropsWithLayout } from '@/types/next'

const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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
              Math.min(1000 * 2 ** attemptIndex, 10_000)
          },
          mutations: {
            retry: false
          }
        }
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <main className={interFont.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
