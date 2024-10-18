import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

import { defaultPagination } from '@/configs'

import { GlobalFilter } from './global-filter'
import { PageSize } from './page-size'
import { Pagination } from './pagination'
import { Props } from './type'

export const DataTable = <T,>(props: Props<T>) => {
  const {
    columns,
    data = [],
    state,
    isLoading,
    pageCount,
    totalData,
    setRowSelection,
    setColumnVisibility,
    setColumnOrder,
    setPagination
  } = props

  const [globalFilter, setGlobalFilter] = useState<string>('')

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: defaultPagination,
      globalFilter: globalFilter,
      ...state
    },
    enableRowSelection: true,
    enableGlobalFilter: true,
    manualPagination: true,
    pageCount,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  const hasData = data.length > 0

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  }

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        <PageSize table={table} />
        <GlobalFilter table={table} />
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-gray-200 text-left text-sm font-semibold text-gray-800"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="p-4"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <AnimatePresence mode="wait">
          {hasData && !isLoading ? (
            <motion.tbody
              key="data"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {table.getRowModel().rows.map((row) => (
                <motion.tr
                  key={row.id}
                  variants={rowVariants}
                  className={twMerge([
                    'border-b border-gray-200 text-sm text-gray-600 hover:bg-gray-100',
                    state?.pagination ? 'last:border-b' : 'last:border-b-0'
                  ])}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="p-4"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          ) : (
            <>
              {isLoading ? (
                <motion.tbody
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <tr>
                    <td
                      colSpan={table.getAllColumns().length}
                      className="pb-6 pt-2 text-center"
                    >
                      <CgSpinner className="mx-auto animate-spin text-5xl" />
                    </td>
                  </tr>
                </motion.tbody>
              ) : (
                <motion.tbody
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <tr>
                    <td
                      colSpan={table.getAllColumns().length}
                      className="pb-6 pt-2 text-center"
                    >
                      <Image
                        src="/images/no-data.webp"
                        alt="Empty"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                      <p className="mb-2 font-bold text-gray-700">
                        Showing 0 Data
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        Please use filter to see specific data
                      </p>
                    </td>
                  </tr>
                </motion.tbody>
              )}
            </>
          )}
        </AnimatePresence>
      </table>
      {hasData && !isLoading && state?.pagination && (
        <Pagination
          table={table}
          totalData={totalData}
          pageCount={pageCount}
        />
      )}
    </div>
  )
}
