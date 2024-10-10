// eslint-disable-next-line @typescript-eslint/no-require-imports
const { locales } = require('./configs/locale')
/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: locales,
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false
  }
}
