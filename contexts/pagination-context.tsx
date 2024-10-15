import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react'

type PaginationContextType<T = Record<string, unknown>> = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  filter: T | undefined
  setFilter: Dispatch<SetStateAction<T | undefined>>
}

type PaginationProviderProps<T> = PropsWithChildren<{
  initialFilter?: T
}>

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
)

const PaginationProvider = <T,>({
  children,
  initialFilter
}: PaginationProviderProps<T>) => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState<Record<string, unknown> | undefined>(
    () => initialFilter || undefined
  )

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        filter,
        setFilter
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

const usePagination = <T,>() => {
  const context = useContext(
    PaginationContext as React.Context<PaginationContextType<T> | undefined>
  )
  if (context === undefined) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

export { PaginationProvider, usePagination }
