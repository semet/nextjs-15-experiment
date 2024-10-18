import { useQuery } from '@tanstack/react-query'

import { batchKey } from '@/factories/query'
import { getBatchRequest } from '@/features/batch'
import { TBatchQueryParams, TBatchResponse } from '@/schemas/batch'

export const useGetBatch = (params: TBatchQueryParams) => {
  const { filter } = params

  return useQuery<TBatchResponse>({
    queryKey: batchKey.batchList(params),
    queryFn: () => getBatchRequest(params),
    enabled: filter && !!filter.department.value
  })
}
