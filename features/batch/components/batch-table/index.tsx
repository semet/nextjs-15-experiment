import { DataTable } from '@/components/table'
import { useTable } from '@/contexts'
import { useGetBatch } from '@/features/batch'
import { TBatchFilter } from '@/schemas/batch'

import { batchColumns } from './data'

export const BatchTable = () => {
  const {
    filter,
    page,
    limit,
    sortingType,
    pagination,
    setPagination,
    rowSelection,
    setRowSelection
  } = useTable<TBatchFilter>()

  const { data, isLoading, isFetching, isRefetching } = useGetBatch({
    page,
    limit,
    filter,
    sortingType
  })

  return (
    <>
      <DataTable
        data={data?.data ?? []}
        columns={batchColumns}
        isLoading={isLoading || isFetching || isRefetching}
        setPagination={setPagination}
        setRowSelection={setRowSelection}
        pageCount={data?.meta?.pageCount}
        totalData={data?.meta?.totalCount}
        state={{
          pagination,
          rowSelection
        }}
      />
    </>
  )
}
