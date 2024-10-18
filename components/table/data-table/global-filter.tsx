import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { TextInput } from '@/components/inputs'

import { GlobalFilterProps, TGlobalFilter } from './type'

export const GlobalFilter = <T,>(props: GlobalFilterProps<T>) => {
  const { table } = props

  const formMethods = useForm<TGlobalFilter>({
    defaultValues: {
      keyword: ''
    }
  })

  const { watch } = formMethods
  const watchKeyword = watch('keyword')

  useEffect(() => {
    const timeout = setTimeout(() => {
      table.setGlobalFilter(String(watchKeyword))
    }, 300)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchKeyword])
  return (
    <FormProvider {...formMethods}>
      <form className="w-full sm:w-auto">
        <TextInput
          type="text"
          name="keyword"
          placeholder="Search..."
          size="sm"
        />
      </form>
    </FormProvider>
  )
}
