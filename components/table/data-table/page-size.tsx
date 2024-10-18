import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Select } from '@/components/inputs'
import { useTable } from '@/contexts'

import { pageSizes } from './data'
import { TPageSizeFilter, PageSizeProps } from './type'

export const PageSize = <T,>(props: PageSizeProps<T>) => {
  const { table } = props
  const { setLimit } = useTable()
  const formMethods = useForm<TPageSizeFilter>({
    defaultValues: {
      pageSize: {
        label: table.getState().pagination.pageSize.toString(),
        value: table.getState().pagination.pageSize
      }
    }
  })

  const { watch } = formMethods
  const watchPageSize = watch('pageSize')

  useEffect(() => {
    table.setPageSize(watchPageSize.value)
    setLimit(watchPageSize.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchPageSize])
  return (
    <FormProvider {...formMethods}>
      <form className="hidden sm:flex">
        <Select
          label="Show"
          name="pageSize"
          containerClassName="flex flex-row w-full text-sm items-center gap-2"
          options={pageSizes}
          size="sm"
        />
      </form>
    </FormProvider>
  )
}
