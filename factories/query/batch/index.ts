import { TBatchQueryParams } from '@/schemas/batch'

export const batchKey = {
  batches: ['batches'] as const,
  batchList: (params?: TBatchQueryParams) => ['batches', params] as const
}
