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

type TableContextType<T = Record<string, unknown>> = {
  page: number
  filter: T | undefined
  setFilter: Dispatch<SetStateAction<T | undefined>>
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
  pageSize?: number
}>

const TableContext = createContext<TableContextType | undefined>(undefined)

const TableProvider = <T,>({
  children,
  initialFilter,
  pageSize = 10
}: TableProviderProps<T>) => {
  const [filter, setFilter] = useState<Record<string, unknown> | undefined>(
    () => initialFilter || undefined
  )
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize
  })

  const page = pagination.pageIndex + 1
  const resetPagination = () => setPagination({ ...pagination, pageIndex: 0 })

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>()

  return (
    <TableContext.Provider
      value={{
        page,
        filter,
        setFilter,
        pagination,
        setPagination,
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
