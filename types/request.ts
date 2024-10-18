export type TResponse<T> = {
  data: T
}

export type TSortingType = 'asc' | 'desc'

export type TSignal = {
  signal?: AbortSignal
}

export type TQueryParams<T> = {
  page?: number
  filter?: T
  sortingType?: TSortingType
  limit?: number
  enabled?: boolean
} & TSignal
