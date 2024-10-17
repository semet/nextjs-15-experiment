import { DataTable } from '@/components/table'
import { useTable } from '@/contexts'
import { useGetBatch } from '@/features/batch'
import { TBatchFilter } from '@/schemas/batch'

import { batchColumns } from './data'

export const BatchTable = () => {
  const { filter, pagination, setPagination, rowSelection, setRowSelection } =
    useTable<TBatchFilter>()
  const { data, isLoading, isFetching, isRefetching } = useGetBatch({
    department: filter?.department ?? { label: '', value: '' }
  })

  return (
    <>
      <DataTable
        data={data?.data ?? []}
        columns={batchColumns(data?.data.length ?? 0)}
        isLoading={isLoading || isFetching || isRefetching}
        state={{
          pagination,
          rowSelection
        }}
        setPagination={setPagination}
        setRowSelection={setRowSelection}
      />
    </>
  )
}
