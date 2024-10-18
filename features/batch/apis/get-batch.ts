import { axiosClient } from '@/apis'
import { batchResponse, TBatchQueryParams } from '@/schemas/batch'

export const getBatchRequest = async (params: TBatchQueryParams) => {
  const { filter, page, limit, sortingType, signal } = params
  try {
    const response = await axiosClient.get(
      `/batches/${filter?.department.value}`,
      {
        params: {
          page: page,
          limit: limit,
          sort: sortingType
        },
        signal
      }
    )
    return batchResponse.parse(response.data)
  } catch {
    throw new Error('An error occurred')
  }
}
