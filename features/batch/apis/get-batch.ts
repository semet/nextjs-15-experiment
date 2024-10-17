import { axiosClient } from '@/apis'
import { batchResponse, TBatchFilter } from '@/schemas/batch'
import { TSignal } from '@/types/request'

type Params = TBatchFilter & TSignal
export const getBatchRequest = async (params: Params) => {
  const { department } = params
  try {
    const response = await axiosClient.get(`/batches/${department.value}`)
    return batchResponse.parse(response.data)
  } catch {
    throw new Error('An error occurred')
  }
}
