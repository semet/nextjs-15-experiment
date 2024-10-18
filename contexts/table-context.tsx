import {
  ColumnOrderState,
  PaginationState,
  RowSelectionState,
  VisibilityState
} from '@tanstack/react-table'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react'

import { TSortingType } from '@/types/request'

type TableContextType<T = Record<string, unknown>> = {
  page: number
  filter: T | undefined
  setFilter: Dispatch<SetStateAction<T | undefined>>
  sortingType: TSortingType
  setSortingType: Dispatch<SetStateAction<TSortingType>>
  limit: number
  setLimit: Dispatch<SetStateAction<number>>
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
  resetPagination: () => void
  columnVisibility: VisibilityState
  setColumnVisibility: Dispatch<SetStateAction<VisibilityState>>
  rowSelection: RowSelectionState
  setRowSelection: Dispatch<SetStateAction<RowSelectionState>>
  columnOrder: ColumnOrderState | undefined
  setColumnOrder: Dispatch<SetStateAction<ColumnOrderState | undefined>>
}

type TableProviderProps<T> = PropsWithChildren<{
  initialFilter?: T
  initialSort?: TSortingType
  pageSize?: number
}>

const TableContext = createContext<TableContextType | undefined>(undefined)

const TableProvider = <T,>({
  children,
  initialFilter,
  initialSort = 'asc',
  pageSize = 10
}: TableProviderProps<T>) => {
  const [filter, setFilter] = useState<Record<string, unknown> | undefined>(
    () => initialFilter || undefined
  )
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize
  })
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>()
  const [sortingType, setSortingType] = useState<TSortingType>(initialSort)
  const [limit, setLimit] = useState<number>(pageSize)
  const page = pagination.pageIndex + 1
  const resetPagination = () => setPagination({ ...pagination, pageIndex: 0 })

  return (
    <TableContext.Provider
      value={{
        page,
        filter,
        setFilter,
        sortingType,
        setSortingType,
        pagination,
        setPagination,
        limit,
        setLimit,
        resetPagination,
        columnVisibility,
        setColumnVisibility,
        rowSelection,
        setRowSelection,
        columnOrder,
        setColumnOrder
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

const useTable = <T,>() => {
  const context = useContext(
    TableContext as React.Context<TableContextType<T> | undefined>
  )
  if (context === undefined) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

export { TableProvider, useTable }
