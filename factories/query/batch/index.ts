import { TBatchQueryParams } from '@/schemas/batch'

export const batchKey = {
  batchList: (params: TBatchQueryParams) => ['batches', params] as const
}
