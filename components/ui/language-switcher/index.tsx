import { useRouter } from 'next/router'

import { locales, storageKeys } from '@/configs'
const { languageKey } = storageKeys
export const LanguageSwitcher = () => {
  const { push, pathname, asPath, query } = useRouter()

  const handleLanguageChange = (lang: (typeof locales)[number]) => {
    localStorage.setItem(languageKey, lang)
    push(
      {
        pathname,
        query
      },
      asPath,
      { locale: lang }
    )
  }
  return (
    <div>
      <ul className="flex gap-4">
        {locales.map((lang) => (
          <li key={lang}>
            <button
              onClick={() => handleLanguageChange(lang)}
              className="rounded bg-red-500 px-2 py-1 text-xs text-white"
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
