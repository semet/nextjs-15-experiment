import type { NextConfig } from 'next'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { i18n } = require('./next-i18next.config.js')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  i18n
}

export default nextConfig
