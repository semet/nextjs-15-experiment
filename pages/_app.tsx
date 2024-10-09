import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import { AppPropsWithLayout } from '@/types/next'

const interFont = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <main className={interFont.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  )
}
