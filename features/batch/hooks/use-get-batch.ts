import { useQuery } from '@tanstack/react-query'

import { batchKey } from '@/factories/query'
import { getBatchRequest } from '@/features/batch'
import { TBatchFilter, TBatchResponse } from '@/schemas/batch'

export const useGetBatch = (params: TBatchFilter) => {
  const { department } = params

  return useQuery<TBatchResponse>({
    queryKey: batchKey.batchList(department.value),
    queryFn: () => getBatchRequest({ department }),
    enabled: !!department.value
  })
}
