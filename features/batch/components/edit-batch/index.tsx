import { useMutation } from '@tanstack/react-query'
import { FC, Fragment, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineEdit } from 'react-icons/md'

import { Select, TextInput } from '@/components/inputs'
import { ModalDialog } from '@/components/ui'
import { batchMutationKeys } from '@/factories/mutation'
import { batchKey } from '@/factories/query'
import { updateBatchRequest } from '@/features/batch'
import { useGetDepartment } from '@/features/department'
import { useQueryActions } from '@/hooks'
import { TEditBatch } from '@/schemas/batch'

import { Props } from './type'

export const EditBatch: FC<Props> = (props) => {
  const { batch } = props
  const [isOpen, setIsOpen] = useState(false)

  const { invalidateQueries } = useQueryActions({
    queryKey: batchKey.batches
  })

  const { data: departments } = useGetDepartment()
  const departmentOptions =
    departments?.data?.map((department) => ({
      label: department.name,
      value: department.id
    })) ?? []

  const fromMethods = useForm<TEditBatch>({
    defaultValues: {
      id: batch.id,
      name: batch.name,
      alias: batch.alias,
      departmentId: departmentOptions.find(
        (option) => option.value === batch.departmentId
      )
    }
  })

  const { handleSubmit } = fromMethods

  const { mutate, isPending } = useMutation({
    mutationKey: batchMutationKeys.update(batch.id),
    mutationFn: updateBatchRequest,
    onSuccess: () => {
      invalidateQueries()
      setIsOpen(false)
    }
  })

  return (
    <Fragment>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded p-2 text-gray-600 hover:bg-blue-50/40 hover:text-primary"
      >
        <MdOutlineEdit />
        <span className="text-sm">Edit</span>
      </button>
      <ModalDialog
        size="sm"
        isOpen={isOpen}
        isLoading={isPending}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        showBackdrop
        onConfirm={() => {
          handleSubmit((data) => {
            mutate(data)
          })()
        }}
        title="Edit Batch"
        confirmText="Save"
      >
        <FormProvider {...fromMethods}>
          <form className="flex flex-col gap-2">
            <Select<TEditBatch>
              name="departmentId"
              label="Department"
              disabled={isPending}
              options={departmentOptions}
            />
            <TextInput<TEditBatch>
              name="name"
              label="Name"
              disabled={isPending}
            />
            <TextInput<TEditBatch>
              name="alias"
              label="Alias"
              disabled={isPending}
            />
          </form>
        </FormProvider>
      </ModalDialog>
    </Fragment>
  )
}
