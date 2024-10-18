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
  const { table, totalData, pageCount } = props

  const currentPage = table.getState().pagination.pageIndex + 1

  const formMethods = useForm({
    defaultValues: {
      page: table.getState().pagination.pageIndex + 1
    }
  })

  const {
    setValue,
    handleSubmit,
    formState: { touchedFields }
  } = formMethods

  const onSubmit = handleSubmit((data) => {
    if (!data.page || !pageCount) return

    if (data.page > pageCount || data.page < 1) {
      return
    }
    table.setPageIndex(data.page - 1)
  })
  const handleFirstPageClick = () => {
    table.setPageIndex(0)
    if (touchedFields.page) {
      setValue('page', 1)
    }
  }
  const handlePrevPageClick = () => {
    table.previousPage()
    if (touchedFields.page) {
      setValue('page', table.getState().pagination.pageIndex)
    }
  }
  const handleLastPageClick = () => {
    table.setPageIndex(table.getPageCount() - 1)
    if (touchedFields.page) {
      setValue('page', table.getPageCount())
    }
  }
  const handleNextPageClick = () => {
    table.nextPage()
    if (touchedFields.page) {
      setValue('page', table.getState().pagination.pageIndex + 2)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 gap-y-2 p-4 md:flex-row">
      <ul className="flex items-center gap-2">
        <li
          onClick={handleFirstPageClick}
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
          onClick={handlePrevPageClick}
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
          onClick={handleNextPageClick}
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
          onClick={handleLastPageClick}
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
                if (
                  isNaN(value) ||
                  value < 1 ||
                  !pageCount ||
                  value > pageCount
                ) {
                  event.target.value = ''
                }
              }
            }}
          />
        </form>
      </FormProvider>
      <div className="text-sm tracking-wide text-gray-500">
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {totalData} data
      </div>
    </div>
  )
}
