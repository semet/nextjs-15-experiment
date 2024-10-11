import { locales } from '@/configs'

describe('axiosClient', () => {
  it('removes language prefix from url', () => {
    const currentPath = '/en/auth/login'
    const withoutLanguage = currentPath
      .split('/')
      .filter(
        (part, index) =>
          index !== 1 || !locales.includes(part as (typeof locales)[number])
      )
      .join('/')

    expect(withoutLanguage).toBe('/auth/login')
  })
})
