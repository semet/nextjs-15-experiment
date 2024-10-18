import { ColumnDef } from '@tanstack/react-table'

import { IndeterminateCheckbox } from '@/components/inputs'
import { BatchOptions } from '@/features/batch'
import { TBatch } from '@/schemas/batch'

export const batchColumns = (
  dataLength: number
): ColumnDef<TBatch, unknown>[] => {
  return [
    {
      id: 'id',
      header: ({ table }) => {
        return dataLength > 0 ? (
          <div className="flex items-center">
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler()
              }}
            />
          </div>
        ) : (
          <IndeterminateCheckbox
            {...{
              disabled: true,
              indeterminate: false
            }}
          />
        )
      },
      cell: ({ row }) => (
        <div className="flex items-center">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        </div>
      ),
      accessorKey: 'id',
      filterFn: 'equalsString'
    },
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
}
