import {
  ColumnDef,
  ColumnOrderState,
  PaginationState,
  RowSelectionState,
  Table,
  TableState,
  VisibilityState
} from '@tanstack/react-table'
import { Dispatch, SetStateAction } from 'react'

export type Props<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  state?: Partial<TableState>
  setRowSelection?: Dispatch<SetStateAction<RowSelectionState>>
  setColumnVisibility?: Dispatch<SetStateAction<VisibilityState>>
  setColumnOrder?: Dispatch<SetStateAction<ColumnOrderState>>
  setPagination?: Dispatch<SetStateAction<PaginationState>>
}

export type PageSizeProps<T> = {
  table: Table<T>
}

export type GlobalFilterProps<T> = PageSizeProps<T>

export type TPageSizeFilter = {
  pageSize: {
    label: string
    value: number
  }
}

export type TGlobalFilter = {
  keyword: string
}
