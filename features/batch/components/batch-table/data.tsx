import { ColumnDef } from '@tanstack/react-table'

import { BatchOptions } from '@/features/batch'
import { TBatch } from '@/schemas/batch'

export const batchColumns: ColumnDef<TBatch, unknown>[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    filterFn: 'includesString',
    cell: (row) => <>{row.getValue()}</>
  },
  {
    id: 'alias',
    header: 'Alias',
    accessorKey: 'alias',
    filterFn: 'includesString',
    cell: (row) => <> {row.getValue()}</>
  },
  {
    id: 'actions',
    header: 'Actions',
    enableColumnFilter: false,
    cell: ({ row }) => <BatchOptions batch={row.original} />
  }
]
