import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight
} from 'react-icons/md'

import { TextInput } from '@/components/inputs'

import { PaginationProps } from './type'

export const Pagination = <T,>(props: PaginationProps<T>) => {
  const { table } = props

  const currentPage = table.getState().pagination.pageIndex + 1
  const totalData = table.getCoreRowModel().rows.length
  const totalPage = Math.ceil(totalData / table.getState().pagination.pageSize)

  const formMethods = useForm({
    defaultValues: {
      page: table.getState().pagination.pageIndex + 1
    }
  })

  const { setValue, handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    if (data.page > totalPage || data.page < 1) {
      return
    }
    table.setPageIndex(data.page - 1)
  })

  useEffect(() => {
    setValue('page', currentPage)
  }, [currentPage, setValue])

  return (
    <div className="flex flex-col items-center gap-4 gap-y-2 p-4 md:flex-row">
      <ul className="flex items-center gap-2">
        <li
          onClick={() => table.firstPage()}
          className="flex cursor-pointer items-center rounded-full bg-primary/10 p-2 text-gray-500 hover:bg-primary hover:text-white has-[:disabled]:bg-primary/10 has-[:disabled]:text-gray-500"
        >
          <button
            disabled={!table.getCanPreviousPage()}
            className="disabled:cursor-not-allowed"
          >
            <MdKeyboardDoubleArrowLeft className="text-lg" />
          </button>
        </li>
        <li
          onClick={() => table.previousPage()}
          className="flex cursor-pointer items-center rounded-full bg-primary/10 p-2 text-gray-500 hover:bg-primary hover:text-white has-[:disabled]:bg-primary/10 has-[:disabled]:text-gray-500"
        >
          <button
            className="disabled:cursor-not-allowed"
            disabled={!table.getCanPreviousPage()}
          >
            <MdKeyboardArrowLeft className="text-lg" />
          </button>
        </li>
        <li className="">
          <span className="text-sm text-gray-500">{currentPage}</span>
        </li>
        <li
          onClick={() => table.nextPage()}
          className="flex cursor-pointer items-center rounded-full bg-primary/10 p-2 text-gray-500 hover:bg-primary hover:text-white has-[:disabled]:bg-primary/10 has-[:disabled]:text-gray-500"
        >
          <button
            className="disabled:cursor-not-allowed"
            disabled={!table.getCanNextPage()}
          >
            <MdKeyboardArrowRight className="text-lg" />
          </button>
        </li>
        <li
          onClick={() => table.lastPage()}
          className="flex cursor-pointer items-center rounded-full bg-primary/10 p-2 text-gray-500 hover:bg-primary hover:text-white has-[:disabled]:bg-primary/10 has-[:disabled]:text-gray-500"
        >
          <button
            className="disabled:cursor-not-allowed"
            disabled={!table.getCanNextPage()}
          >
            <MdKeyboardDoubleArrowRight className="text-lg" />
          </button>
        </li>
      </ul>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <TextInput
            name="page"
            type="number"
            size="sm"
            className="h-[33px] w-24 text-xs"
            placeholder="Go to page"
            rules={{
              onChange(event) {
                const value = Number(event.target.value)
                if (value < 1 || value > totalPage) {
                  event.target.value = ''
                }
              }
            }}
          />
        </form>
      </FormProvider>
      <div className="text-sm tracking-wide text-gray-500">
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {table.getRowCount().toLocaleString()} Rows
      </div>
    </div>
  )
}
