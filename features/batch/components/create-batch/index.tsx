import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Fragment, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineAdd } from 'react-icons/md'
import { toast } from 'react-toastify'

import { Select, SubmitButton, TextInput } from '@/components/inputs'
import { SidePanel } from '@/components/ui'
import { batchMutationKeys } from '@/factories/mutation'
import { batchKey } from '@/factories/query'
import { createBatchRequest } from '@/features/batch'
import { useGetDepartment } from '@/features/department'
import { useQueryActions } from '@/hooks'
import { createBatch, TCreateBatch } from '@/schemas/batch'

export const CreateBatch = () => {
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

  const fromMethods = useForm<TCreateBatch>({
    defaultValues: {
      name: '',
      alias: '',
      departmentId: {
        label: '',
        value: ''
      }
    },
    resolver: zodResolver(createBatch)
  })

  const { handleSubmit, reset } = fromMethods

  const { mutate, isPending } = useMutation({
    mutationKey: batchMutationKeys.create,
    mutationFn: createBatchRequest,
    onSuccess: () => {
      toast.success('Batch created successfully')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSettled: () => {
      invalidateQueries()
      onClose()
    }
  })

  const onSubmit = handleSubmit((data) => {
    mutate(data)
  })

  const onClose = () => {
    setIsOpen(false)
    reset()
  }
  return (
    <Fragment>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-primary/10 p-2 text-gray-600 hover:bg-primary hover:text-white"
      >
        <MdOutlineAdd className="text-lg" />
      </button>
      <SidePanel
        isOpen={isOpen}
        isLoading={false}
        setIsOpen={setIsOpen}
        onClose={onClose}
        title="Create Batch"
      >
        <FormProvider {...fromMethods}>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
          >
            <Select
              required
              name="departmentId"
              label="Department"
              options={departmentOptions}
              disabled={isPending}
            />
            <TextInput
              required
              name="name"
              label="Name"
              disabled={isPending}
            />
            <TextInput
              required
              name="alias"
              label="Alias"
              disabled={isPending}
            />

            <SubmitButton
              onCancel={onClose}
              isLoading={isPending}
            />
          </form>
        </FormProvider>
      </SidePanel>
    </Fragment>
  )
}
