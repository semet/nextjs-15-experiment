import { FC, Fragment, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineEdit } from 'react-icons/md'

import { Select, TextInput } from '@/components/inputs'
import { ModalDialog } from '@/components/ui'
import { useGetDepartment } from '@/features/department'
import { TEditBatch } from '@/schemas/batch'

import { Props } from './type'

export const EditBatch: FC<Props> = (props) => {
  const { batch } = props
  const [isOpen, setIsOpen] = useState(false)

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
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
        showBackdrop
        onConfirm={() => {
          handleSubmit((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
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
              options={departmentOptions}
            />
            <TextInput<TEditBatch>
              name="name"
              label="Name"
            />
            <TextInput<TEditBatch>
              name="alias"
              label="Alias"
            />
          </form>
        </FormProvider>
      </ModalDialog>
    </Fragment>
  )
}
