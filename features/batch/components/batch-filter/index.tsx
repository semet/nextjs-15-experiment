import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineFilterAlt } from 'react-icons/md'

import { Select } from '@/components/inputs'
import { useTable } from '@/contexts'
import { useDepartmentOptions } from '@/features/department'
import { batchFilter, TBatchFilter } from '@/schemas/batch'

export const BatchFilter = () => {
  const departmentOptions = useDepartmentOptions()
  const { setFilter } = useTable<TBatchFilter>()

  const formMethods = useForm<TBatchFilter>({
    resolver: zodResolver(batchFilter)
  })
  const { handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    setFilter(data)
  })

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={onSubmit}
        className="flex w-full justify-end gap-4 md:w-1/2 lg:w-1/4"
      >
        <Select<TBatchFilter>
          name="department"
          containerClassName="w-full"
          placeholder="Department"
          options={departmentOptions ?? []}
        />
        <button
          type="submit"
          className="rounded-lg bg-primary/10 p-2 text-gray-600 hover:bg-primary hover:text-white"
        >
          <MdOutlineFilterAlt className="text-lg" />
        </button>
      </form>
    </FormProvider>
  )
}
