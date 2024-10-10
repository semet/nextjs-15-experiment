import { useTranslation } from 'next-i18next'

import { LanguageSwitcher } from '@/components/ui'
import { useHomepageData } from '@/features/home'

export const Homepage = () => {
  const { t } = useTranslation('common')
  const { data, refetch, isFetching, isLoading, isRefetching } =
    useHomepageData()

  return (
    <div className="flex flex-col gap-4 align-baseline">
      <div className="text-4xl">Home</div>
      <button
        disabled={isFetching || isLoading || isRefetching}
        onClick={() => refetch()}
        className="w-min rounded bg-gray-500 px-4 py-2 text-white"
      >
        refetch
      </button>

      <LanguageSwitcher />

      <pre className="text-5xl">{t('greeting')}</pre>
      {isFetching || isLoading || isRefetching ? (
        <div>Loading...</div>
      ) : (
        <pre className="bg-gray-100 p-2">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}
