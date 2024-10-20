import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
      className="scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-900/40"
    >
      <Head />
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
